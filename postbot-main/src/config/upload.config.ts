import { PATHS_CONFIG } from './paths.config';

export const UPLOAD_CONFIG = {
  IMAGES_FOLDER: PATHS_CONFIG.IMAGES_FOLDER,
  VIDEOS_FOLDER: PATHS_CONFIG.VIDEOS_FOLDER,
  UPLOAD_INTERVAL: '0 * * * *',  // cron expression for hourly uploads
  MAX_RETRIES: 3,  // maximum number of retry attempts
  RETRY_DELAY: 5000,  // delay between retries in milliseconds
  ALLOWED_IMAGE_TYPES: ['.jpg', '.jpeg', '.png'],
  ALLOWED_VIDEO_TYPES: ['.mp4', '.mov'],
};