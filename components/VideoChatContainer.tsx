import { useState } from "react";
import Conversation from "./Conversation";
import VideoChat from "./VideoChat";

const VideoChatContainer = () => {
  const [videoUrl, setVideoUrl] = useState("");
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/2 h-full">
        <VideoChat videoUrl={videoUrl} />
      </div>
      <div className="w-1/2 h-full overflow-y-scroll">
        <Conversation setVideoUrl={setVideoUrl} />
      </div>
    </div>
  );
};

export default VideoChatContainer;
