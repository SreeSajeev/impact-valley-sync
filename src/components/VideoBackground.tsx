
import React, { useState } from 'react';

interface VideoBackgroundProps {
  src: string;
  fallbackImage?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ src, fallbackImage }) => {
  const [videoError, setVideoError] = useState(false);
  const [isMobile, setIsMobile] = useState(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );

  const handleVideoError = () => {
    setVideoError(true);
  };

  if (videoError || isMobile) {
    return (
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: fallbackImage ? `url(${fallbackImage})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
    );
  }

  return (
    <>
      <video
        className="fixed inset-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
        onError={handleVideoError}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-black/40 -z-10" />
    </>
  );
};

export default VideoBackground;
