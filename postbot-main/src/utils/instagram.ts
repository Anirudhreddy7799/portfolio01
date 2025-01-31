import { IgApiClient } from 'instagram-private-api';
import fs from 'fs-extra';
import path from 'path';
import { ImageStatus } from '@/types/instagram';
import { UPLOAD_CONFIG } from '@/config/upload.config';

// Mock implementation for browser environment
export const initializeInstagramClient = async (username: string, password: string): Promise<IgApiClient> => {
  if (!username || !password) {
    throw new Error('Instagram credentials are required');
  }

  // Return a mock client for browser testing
  return {
    state: {
      generateDevice: () => {},
    },
    account: {
      login: async () => ({}),
    },
    publish: {
      photo: async () => ({}),
      video: async () => ({}),
    },
  } as unknown as IgApiClient;
};

let mockMediaFiles = [
  '/uploads/images/test-image-1.jpg',
  '/uploads/images/test-image-2.jpg',
  '/uploads/videos/test-video-1.mp4',
  '/uploads/videos/test-video-2.mp4'
];

export const getMediaFromFolders = async (): Promise<string[]> => {
  return mockMediaFiles;
};

export const uploadMedia = async (
  ig: IgApiClient,
  mediaPath: string,
  retries = 0
): Promise<ImageStatus> => {
  try {
    const fileName = path.basename(mediaPath);
    
    // Simulate successful upload and file deletion
    mockMediaFiles = mockMediaFiles.filter(file => file !== mediaPath);
    
    return {
      filename: fileName,
      status: 'uploaded',
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error uploading media:', error);
    return {
      filename: path.basename(mediaPath),
      status: 'error',
      error: error.message,
      timestamp: new Date().toISOString()
    };
  }
};