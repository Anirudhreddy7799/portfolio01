import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Image, Video } from 'lucide-react';
import { getMediaFromFolders } from '../utils/instagram'; // Use relative path
import { UPLOAD_CONFIG } from '../config/upload.config'; // Use relative path
import { MediaCounts } from '@/types/instagram';

export const MediaCounter = () => {
  const [mediaCounts, setMediaCounts] = useState<MediaCounts>({
    images: 0,
    videos: 0,
    deletedImages: 0,
    deletedVideos: 0
  });

  useEffect(() => {
    const fetchMediaCount = async () => {
      const mediaFiles = await getMediaFromFolders();
      const imageCount = mediaFiles.filter(file => 
        UPLOAD_CONFIG.ALLOWED_IMAGE_TYPES.some(ext => file.toLowerCase().endsWith(ext))
      ).length;
      const videoCount = mediaFiles.filter(file =>
        UPLOAD_CONFIG.ALLOWED_VIDEO_TYPES.some(ext => file.toLowerCase().endsWith(ext))
      ).length;
      setMediaCounts({
        images: imageCount,
        videos: videoCount,
        deletedImages: 0,
        deletedVideos: 0
      });
    };

    fetchMediaCount();
  }, []);

  return (
    <Card>
      <CardContent>
        <Badge>{mediaCounts.images} Images</Badge>
        <Badge>{mediaCounts.videos} Videos</Badge>
      </CardContent>
    </Card>
  );
};