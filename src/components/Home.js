import React from 'react';
import PersonCard from "./PersonCard";
import BottomArrow from "./BottomArrow";

function Home() {
    return ( 
        <div className="flex flex-col">
            <div className="w-full h-screen justify-center items-center flex flex-col bg-gray-900">
                <PersonCard />
                <BottomArrow />
            </div>
            <div className="w-full h-screen bg-gray-900">
            </div>
        </div>
     );
}
 
export default Home;