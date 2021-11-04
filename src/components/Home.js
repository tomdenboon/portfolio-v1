import React from "react";
import PersonCard from "./personCard/PersonCard";

function Home() {
  return (
    <div className="flex h-full flex-col py-16 items-center xl:justify-center xl:pb-32 overflow-y-auto">
      <PersonCard />
    </div>
  );
}

export default Home;
