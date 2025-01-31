import cron from 'node-cron';
import { IgApiClient } from 'instagram-private-api';
import fs from 'fs-extra';
import { getMediaFromFolders, uploadMedia, initializeInstagramClient } from '@/utils/instagram';
import { UPLOAD_CONFIG } from '@/config/upload.config';
import { INSTAGRAM_CONFIG } from '@/config/instagram.config';

export class UploadScheduler {
  private task: cron.ScheduledTask | null = null;
  private ig: IgApiClient | null = null;
  private onStatusUpdate: (status: string) => void;
  private isProcessing: boolean = false;
  private baseUrl: string;

  constructor(onStatusUpdate: (status: string) => void) {
    this.onStatusUpdate = onStatusUpdate;
    this.baseUrl = `https://${window.location.hostname}`;
  }

  async start() {
    try {
      if (!INSTAGRAM_CONFIG.username || !INSTAGRAM_CONFIG.password) {
        throw new Error('Instagram credentials are not configured');
      }

      this.ig = await initializeInstagramClient(
        INSTAGRAM_CONFIG.username,
        INSTAGRAM_CONFIG.password
      );

      this.task = cron.schedule(UPLOAD_CONFIG.UPLOAD_INTERVAL, () => {
        if (!this.isProcessing) {
          this.processUpload();
        }
      });

      this.onStatusUpdate('Scheduler started successfully');
    } catch (error) {
      this.onStatusUpdate(`Failed to start scheduler: ${error.message}`);
      throw error;
    }
  }

  stop() {
    if (this.task) {
      this.task.stop();
      this.task = null;
    }
    this.ig = null;
    this.isProcessing = false;
    this.onStatusUpdate('Scheduler stopped');
  }

  private async processUpload() {
    if (!this.ig) return;

    try {
      this.isProcessing = true;
      const mediaFiles = await getMediaFromFolders();
      
      if (mediaFiles.length === 0) {
        this.onStatusUpdate('No media files found to upload');
        return;
      }

      const nextMedia = mediaFiles[0];
      const result = await uploadMedia(this.ig, nextMedia);

      if (result.status === 'uploaded') {
        await fs.unlink(nextMedia);
        this.onStatusUpdate(`Successfully uploaded and removed ${result.filename}`);
      } else {
        this.onStatusUpdate(`Failed to upload ${result.filename}: ${result.error}`);
      }
    } catch (error) {
      this.onStatusUpdate(`Upload process error: ${error.message}`);
    } finally {
      this.isProcessing = false;
    }
  }
}