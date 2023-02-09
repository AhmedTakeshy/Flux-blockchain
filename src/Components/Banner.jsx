import React from "react";
import bannerVideo from "../assets/video.mp4";

const Banner = () => {
  return (
    <div className="w-full h-[90vh] ">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover -z-10 absolute"
        src={bannerVideo}
      />
      <div className="w-full h-[90%] flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-white pointer-events-none">Decentralized</h1>
        <h1 className="text-white pointer-events-none">
          <span className="text-green">Trading</span> Protocol
        </h1>
        <p className="text-xl py-4 pointer-events-none">
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications.
        </p>
        <div>
          <button className="m-2 text-black">Use Flux</button>
          <button className="btn">FAQ</button>
        </div>
      </div>
      <div>
        <p className="text-center text-white text-2xl font-bold pointer-events-none">
          Total Volume Secured: $42,104,783,662.47
        </p>
      </div>
    </div>
  );
};

export default Banner;
