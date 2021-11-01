import React from "react";
import PersonCard from "./personCard/PersonCard";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-16 sm:mt-0 sm:h-screen">
      <PersonCard />
    </div>
  );
}

export default Home;
