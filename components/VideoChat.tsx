import React, { useEffect, useState } from "react";

interface VideoChatProps {
  videoUrl: string;
}

const defaultUrl =
  "https://fal-cdn.batuhan-941.workers.dev/files/monkey/e-WwA3aNnZGg_rC7JTfP-.mp4";
const url2 =
  "https://fal-cdn.batuhan-941.workers.dev/files/rabbit/Y5d5Qj5F-c09RRZM9MTcD.mp4";
const VideoChat: React.FC<VideoChatProps> = ({ videoUrl }) => {
  const [url, setUrl] = useState(videoUrl);

  useEffect(() => {
    setUrl(videoUrl);
  }, [videoUrl]);

  return (
    <div
      className="flex flex-col p-3"
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
    >
      {url && (
        <video
          src={url}
          autoPlay
          controls
          loop
          style={{ borderRadius: "8px", padding: "12px" }}
        />
      )}
    </div>
  );
};

export default VideoChat;
