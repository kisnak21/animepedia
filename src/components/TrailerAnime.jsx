"use client";

import YouTube from "react-youtube";
import { AiFillCloseSquare } from "react-icons/ai";
import { useState } from "react";

const TrailerAnime = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const optionVid = {
    width: "300",
    height: "250",
  };

  const handleVideo = (e) => {
    e.preventDefault();
    setIsOpen((prevState) => !prevState);
  };

  const Trailer = () => {
    return (
      <div className="fixed bottom-2 right-2 transition-all">
        <button className="text-secondary right-2 fixed" onClick={handleVideo}>
          <AiFillCloseSquare size={44} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={optionVid}
          onError={() =>
            alert("Sorry trailer is not available right now, try again later:(")
          }
        />
      </div>
    );
  };
  return isOpen ? (
    <Trailer />
  ) : (
    <button
      className="text-secondary right-5 bottom-5 fixed w-32 bg-primary rounded-lg p-2 shadow-lg"
      onClick={handleVideo}
    >
      Trailer
    </button>
  );
};

export default TrailerAnime;
