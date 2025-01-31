import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { ImageStatus } from '@/types/instagram';

interface UploadHistoryProps {
  images: ImageStatus[];
}

export const UploadHistory = ({ images }: UploadHistoryProps) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium mb-4">Upload History</h3>
      <div className="space-y-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 bg-secondary rounded-md"
          >
            <span className="flex items-center">
              {image.status === 'uploaded' ? (
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              ) : image.status === 'error' ? (
                <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
              ) : (
                <Clock className="h-4 w-4 text-yellow-500 mr-2" />
              )}
              {image.filename}
            </span>
            <Badge variant={
              image.status === 'uploaded' ? 'default' :
              image.status === 'error' ? 'destructive' : 'secondary'
            }>
              {image.status}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  );
};