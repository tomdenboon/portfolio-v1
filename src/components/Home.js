import React from "react";
import PersonCard from "./personCard/PersonCard";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center xl:h-screen min-h-screen pb-9">
      <PersonCard />
    </div>
  );
}

export default Home;
