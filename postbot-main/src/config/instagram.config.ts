const getStoredConfig = () => {
  const stored = localStorage.getItem('uploadConfig');
  if (stored) {
    const config = JSON.parse(stored);
    return {
      username: config.instagramUsername || '',
      password: config.instagramPassword || '',
    };
  }
  return {
    username: '',
    password: '',
  };
};

export const INSTAGRAM_CONFIG = getStoredConfig();