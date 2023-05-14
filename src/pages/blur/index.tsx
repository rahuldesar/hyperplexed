import useCursorCoordinates from "@/utils/useCursorCoordinates";
import { useEffect, useRef, useState } from "react";

export default function Somepage() {
  const blobRef = useRef<HTMLDivElement>(null);
  const mouseCoordinates = useCursorCoordinates();

  const { clientX, clientY } = mouseCoordinates as { clientX: string; clientY: string };

  if (clientX && blobRef.current) {
    let blob = blobRef.current;
    blob.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 750, fill: "forwards" }
    );
  }

  return (
    <div className="relative h-screen overflow-hidden ">
      <div
        ref={blobRef}
        className="translate-middle absolute aspect-square h-36 animate-custom-rotate rounded-full bg-gradient-to-r  from-green-400  to-purple-600 ease-in-out"
      ></div>
      <div id="blur" className="absolute z-10 h-full w-full backdrop-blur-[75px]"></div>
    </div>
  );
}
