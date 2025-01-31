import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { PATHS_CONFIG } from "../config/paths.config"; // Use relative path
import { INSTAGRAM_CONFIG } from "../config/instagram.config"; // Use relative path

export const ConfigurationForm = () => {
  const { toast } = useToast();
  const [config, setConfig] = useState({
    imagesPath: PATHS_CONFIG.IMAGES_FOLDER,
    videosPath: PATHS_CONFIG.VIDEOS_FOLDER,
    instagramUsername: INSTAGRAM_CONFIG.username,
    instagramPassword: INSTAGRAM_CONFIG.password,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Update configuration
    PATHS_CONFIG.IMAGES_FOLDER = config.imagesPath;
    PATHS_CONFIG.VIDEOS_FOLDER = config.videosPath;
    INSTAGRAM_CONFIG.username = config.instagramUsername;
    INSTAGRAM_CONFIG.password = config.instagramPassword;

    // Save to localStorage for persistence
    localStorage.setItem('uploadConfig', JSON.stringify({
      imagesPath: config.imagesPath,
      videosPath: config.videosPath,
      instagramUsername: config.instagramUsername,
    }));

    toast({
      title: "Configuration Updated",
      description: "Your settings have been saved successfully.",
    });
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Configuration Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="imagesPath" className="block text-sm font-medium mb-1">
              Images Folder Path
            </label>
            <Input
              id="imagesPath"
              name="imagesPath"
              value={config.imagesPath}
              onChange={handleChange}
              placeholder="Enter path to images folder"
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="videosPath" className="block text-sm font-medium mb-1">
              Videos Folder Path
            </label>
            <Input
              id="videosPath"
              name="videosPath"
              value={config.videosPath}
              onChange={handleChange}
              placeholder="Enter path to videos folder"
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="instagramUsername" className="block text-sm font-medium mb-1">
              Instagram Username
            </label>
            <Input
              id="instagramUsername"
              name="instagramUsername"
              value={config.instagramUsername}
              onChange={handleChange}
              placeholder="Enter Instagram username"
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="instagramPassword" className="block text-sm font-medium mb-1">
              Instagram Password
            </label>
            <Input
              id="instagramPassword"
              name="instagramPassword"
              type="password"
              value={config.instagramPassword}
              onChange={handleChange}
              placeholder="Enter Instagram password"
              className="w-full"
            />
          </div>
          <Button type="submit">
            Save Configuration
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};