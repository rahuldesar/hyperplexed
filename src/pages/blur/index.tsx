import { useEffect, useState } from "react";

export default function Somepage() {
  useEffect(() => {
    const blob = document.getElementById("blob");

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;
      if (blob) {
        blob.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 1250, fill: "forwards" }
        );
      }
    };
  }, []);
  return (
    <div className="relative h-screen overflow-hidden ">
      <div
        id="blob"
        className="translate-middle absolute aspect-square h-36 animate-custom-rotate rounded-full bg-gradient-to-r  from-green-400  to-purple-600 ease-in-out"
      ></div>
      <div id="blur" className="absolute z-10 h-full w-full backdrop-blur-[75px]"></div>
    </div>
  );
}
