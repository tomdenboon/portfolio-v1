import React, { useRef } from 'react';
import PersonCard from "./PersonCard";
import BottomArrow from "./BottomArrow";

function Home() {
    const myRef = useRef(null)
    const executeScroll = () => {
        console.log("clickclak")
        myRef.current.scrollIntoView({ behavior: 'smooth'})
    }
    return ( 
        <div className="flex flex-col">
            <div className="w-full h-screen justify-center items-center flex flex-col bg-gray-900">
                <PersonCard />
                <button onClick={executeScroll}>
                    <BottomArrow/>
                </button>
            </div>
            <div className="w-full h-screen bg-gray-900" ref={myRef}>
            </div>
        </div>
     );
}
 
export default Home;