import Image from "next/image";
import { Button } from "@/components/ui/button";
import Chat from "./chat";
import VideoChatContainer from "../components/VideoChatContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-800">
      <div className="flex flex-col max-w-screen-xl my-12">
        {/* <Button>record</Button>
        <Chat /> */}
      </div>

      <main className="mx-auto max-w-7xl  px-4 md:px-6 lg:px-8 h-[calc(100%-8rem)]">
        <VideoChatContainer />
      </main>
    </main>
  );
}
