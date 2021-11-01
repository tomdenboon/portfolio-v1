import React, { useRef } from "react";
import PersonCard from "./personCard/PersonCard";
import BottomArrow from "./BottomArrow";

function Home() {
  const myRef = useRef(null);
  const executeScroll = () => {
    console.log("clickclak");
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col bg-gray-900">
      <div className="flex flex-col items-center justify-center pt-16 sm:pt-0 sm:h-screen">
        <PersonCard />
        <button className="invisible sm:visible" onClick={executeScroll}>
          <BottomArrow />
        </button>
      </div>
      <div className="flex h-screen" ref={myRef}></div>
    </div>
  );
}

export default Home;
