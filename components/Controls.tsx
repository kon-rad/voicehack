import { Message } from "ai/react";
import { Tooltip } from "@nextui-org/react";
import { useCallback, useEffect } from "react";

import { MicrophoneIcon } from "./icons/MicrophoneIcon";
import { SendIcon } from "./icons/SendIcon";
import { useMicrophone } from "../app/context/Microphone";
import { useNowPlaying } from "react-nowplaying";

export const Controls = ({
  input,
  handleSubmit,
  handleInputChange,
  messages,
}: {
  input: string;
  handleSubmit: any;
  handleInputChange: any;
  messages: Message[];
}) => {
  const { startMicrophone, stopMicrophone, microphoneOpen } = useMicrophone();

  useEffect(() => {
    startMicrophone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const microphoneToggle = useCallback(
    async (e: Event) => {
      e.preventDefault();

      if (microphoneOpen) {
        stopMicrophone();
      } else {
        startMicrophone();
      }
    },
    [microphoneOpen, startMicrophone, stopMicrophone]
  );

  const { stop: stopAudio } = useNowPlaying();

  const submitter = useCallback(
    (e: any) => {
      handleSubmit(e);
      stopAudio();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [stopAudio, handleSubmit]
  );

  return (
    <form onSubmit={submitter}>
      <div className="relative">
        <div className="absolute w-full -top-[4.5rem] py-4 flex justify-between"></div>
        <div className="flex rounded-full">
          <span
            className={`rounded-s-full ps-0.5 py-0.5 ${
              microphoneOpen ? "red-500" : "gray-500"
            }`}
          >
            <Tooltip showArrow content="">
              <a
                href="#"
                onClick={(e: any) => microphoneToggle(e)}
                className={`w-20 sm:w-24 py-4 px-2 sm:px-8 rounded-s-full font-bold text-light-900 text-sm sm:text-base flex items-center justify-center group`}
              >
                {microphoneOpen && (
                  <div className="w-auto items-center justify-center hidden sm:flex absolute shrink-0">
                    <MicrophoneIcon
                      micOpen={microphoneOpen}
                      className="h-6 animate-ping-short"
                    />
                  </div>
                )}
                <div className="w-auto flex items-center justify-center shrink-0">
                  <MicrophoneIcon micOpen={microphoneOpen} className="h-6" />
                </div>
                {/* <span>
                {microphoneOpen ? (
                  <>Now listening...</>
                ) : (
                  <>{`${isTablet || isMobile ? "Tap" : "Click"} to speak`}</>
                )}
              </span> */}
              </a>
            </Tooltip>
          </span>

          <span className="flex-grow bg-gray-200 py-0.5">
            <input
              type="text"
              className="py-4 sm:px-4 w-full h-full  text-light-900 border-0 text-sm sm:text-base outline-none focus:ring-0"
              placeholder="Type a message to send..."
              value={input}
              onChange={handleInputChange}
            />
          </span>

          <span className="rounded-e-full bg-green-200 pe-0.5 py-0.5">
            <Tooltip showArrow content="Send a message.">
              <button className="w-20 sm:w-24 py-4 px-2 sm:px-8 rounded-e-full font-bold  text-light-900 text-sm sm:text-base flex items-center justify-center">
                {/* <span>Send text</span> */}
                <SendIcon className="h-6 w-6" />
              </button>
            </Tooltip>
          </span>
        </div>
      </div>
    </form>
  );
};
