import React, { useEffect, useState } from "react";

interface VideoChatProps {
  videoUrl: string;
}

const VideoChat: React.FC<VideoChatProps> = ({ videoUrl }) => {
  const [url, setUrl] = useState(videoUrl);

  useEffect(() => {
    setUrl(videoUrl);
  }, [videoUrl]);

  return (
    <div className="flex flex-col">
      {url && <video src={url} autoPlay controls />}
    </div>
  );
};

export default VideoChat;
