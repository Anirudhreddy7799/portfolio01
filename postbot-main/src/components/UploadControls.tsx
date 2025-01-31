import { Button } from "@/components/ui/button";
import { Clock, Upload, AlertCircle } from 'lucide-react';
import { UploadStatus } from '@/types/instagram';

interface UploadControlsProps {
  uploadStatus: UploadStatus;
  onStartUpload: () => void;
  onStopUpload: () => void;
}

export const UploadControls = ({ uploadStatus, onStartUpload, onStopUpload }: UploadControlsProps) => {
  return (
    <div className="flex items-center justify-between">
      <Button
        onClick={uploadStatus.status === 'idle' ? onStartUpload : onStopUpload}
        variant={uploadStatus.status === 'idle' ? 'default' : 'destructive'}
      >
        {uploadStatus.status === 'idle' ? (
          <>
            <Upload className="mr-2 h-4 w-4" />
            Start Upload
          </>
        ) : (
          <>
            <AlertCircle className="mr-2 h-4 w-4" />
            Stop Upload
          </>
        )}
      </Button>
      <div className="flex items-center space-x-2">
        <Clock className="h-4 w-4" />
        <span className="text-sm text-muted-foreground">
          Next upload: {uploadStatus.nextUpload || 'Not scheduled'}
        </span>
      </div>
    </div>
  );
};