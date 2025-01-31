export interface InstagramConfig {
  username: string;
  password: string;
}

export interface UploadStatus {
  status: 'idle' | 'running' | 'completed' | 'error';
  message: string;
  lastUpload: string | null;
  nextUpload: string | null;
}

export interface ImageStatus {
  filename: string;
  status: 'pending' | 'uploaded' | 'error';
  timestamp?: string;
  error?: string;
}

export interface MediaCounts {
  images: number;
  videos: number;
  deletedImages: number;
  deletedVideos: number;
}