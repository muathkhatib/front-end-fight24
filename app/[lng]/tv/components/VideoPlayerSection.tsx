"use client";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import useBreakpoints from "@/hooks/useBreakpoints";

interface Props {
  data: any;
}
const youTubeOptions = {
  playerVars: {
    autoplay: 1,
    controls: 1,
    rel: 0,
    showinfo: 0,
    mute: 1,
    loop: 1,
    fullscreen: 1,
  },
};

function VideoPlayerSection({ data }: Props) {
  const { isXs, isSm, isMd, isLg } = useBreakpoints();

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <ReactPlayer
          config={{
            youtube: youTubeOptions,
          }}
          url={data.fields.videoStreamUrl}
          controls={true}
          height={499}
          width={isXs || isSm ? 390 : 1100}
        />
      </div>
      <div className="pl-8 xs:mt-4 md:mt-0">
        <span className="text-base-gray">{data.fields.championName}</span>
        <div className="flex justify-between xs:flex-col md:flex-row xs:items-start md:items-center">
          <h1 className="text-5xl font-black">
            {data.fields.title}
            <span className="block text-base text-base-yellow mt-2">
              {data.fields.timeAndTypeOfCompetition}
            </span>
          </h1>
          <div className="flex xs:mt-4 md:mt-0">
            <span className="text-base-gray mr-4">Teilen</span>
            <FaTwitter className="w-6 h-6  mr-4 text-base-gray" />
            <FaFacebookF className="w-6 h-6  mr-4 text-base-gray" />
            <FaInstagram className="w-6 h-6 mr-6 text-base-gray" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayerSection;
