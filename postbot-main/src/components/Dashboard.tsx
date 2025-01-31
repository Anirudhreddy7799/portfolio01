import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { UploadStatus, ImageStatus, MediaCounts } from '@/types/instagram';
import { MediaCounter } from './MediaCounter';
import { UploadControls } from './UploadControls';
import { UploadHistory } from './UploadHistory';
import { ConfigurationForm } from './ConfigurationForm';

const Dashboard = () => {
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>({
    status: 'idle',
    message: 'Ready to start',
    lastUpload: null,
    nextUpload: null,
  });

  const [images, setImages] = useState<ImageStatus[]>([]);
  const [mediaCounts, setMediaCounts] = useState<MediaCounts>({
    images: 0,
    videos: 0,
    deletedImages: 0,
    deletedVideos: 0
  });

  const { toast } = useToast();

  const startUpload = async () => {
    setUploadStatus(prev => ({
      ...prev,
      status: 'running',
      message: 'Upload process started',
      nextUpload: new Date(Date.now() + 5000).toLocaleTimeString()
    }));
    toast({
      title: "Upload Started",
      description: "The upload process has been initiated.",
    });
  };

  const stopUpload = () => {
    setUploadStatus(prev => ({
      ...prev,
      status: 'idle',
      message: 'Upload process stopped',
      nextUpload: null
    }));
    toast({
      title: "Upload Stopped",
      description: "The upload process has been stopped.",
    });
  };

  const handleMediaDeleted = (filename: string) => {
    const isImage = filename.match(/\.(jpg|jpeg|png|gif)$/i);
    setMediaCounts(prev => ({
      ...prev,
      deletedImages: isImage ? prev.deletedImages + 1 : prev.deletedImages,
      deletedVideos: !isImage ? prev.deletedVideos + 1 : prev.deletedVideos,
    }));
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <ConfigurationForm />
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Instagram Auto Uploader
            <Badge 
              variant={uploadStatus.status === 'running' ? 'default' : 'secondary'}
              className="ml-2"
            >
              {uploadStatus.status.toUpperCase()}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <MediaCounter />
          <UploadControls 
            uploadStatus={uploadStatus}
            onStartUpload={startUpload}
            onStopUpload={stopUpload}
          />
          <UploadHistory images={images} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;