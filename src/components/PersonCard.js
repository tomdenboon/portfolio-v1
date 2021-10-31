import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomButton1 from './CustomButton1';
import { formatTime } from '../utils'
import { FaGrin, FaGrinWink, FaGithub } from 'react-icons/fa'

function PersonCard() {
    const [isHoveredSmiley, setIsHoveredSmiley] = useState(false);
    const timer = useSelector(state => state.timer)

    const toggleHover = (() => {
        setIsHoveredSmiley(!isHoveredSmiley)
    });

    return ( 
        <div className="shadow-lg divide-x divide-gray-900 font flex text-gray-200 bg-gray-800 rounded-md" style={{width: "1000px", height: "500px"}}>
            <div className="w-1/3 h-full items-center flex flex-col">
                <div className="mt-16 h-48 w-48 flex items-center text-8xl justify-center rounded-full bg-gray-900 text-green-700" 
                onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                    {isHoveredSmiley ? <FaGrinWink/> : <FaGrin/>}
                </div>
                <div className="text-3xl font-serif font-black mt-5">
                    Tom den Boon
                </div>
                <div className="text-lg text-green-700 font-mono font-black mt-5">
                    Software Developer
                </div>
                <div className="flex mt-5 text-4xl hover:text-gray-400 cursor-pointer select-none">
                    <FaGithub />
                </div>
            </div>
            <div className="relative w-2/3 h-full flex flex-col justify-between items-center p-5">
                <div className="flex flex-col text-7xl font-bold pt-2">
                    Hello,
                    <div className="h-1 ml-16 mt-2 w-16 bg-green-700"></div>
                </div>
                <div className="flex w-full justify-between">
                    <div className="w-1/2 mr-1">
                        loves learning new, and improving. Can work on all parts of the stack.
                        loves learning new, and improving. Can work on all parts of the stack.
                        loves learning new, and improving. Can work on all parts of the stack.
                        loves learning new, and improving. Can work on all parts of the stack.
                    </div>
                    <div className="w-1/2 ml-1">
                        loves learning new, and improving. Can work on all parts of the stack.
                        loves learning new, and improving. Can work on all parts of the stack.
                        loves learning new, and improving. Can work on all parts of the stack.
                        loves learning new, and improving. Can work on all parts of the stack.
                    </div>
                </div>
                <div className="flex">
                    <CustomButton1 content="Projects"/>
                    <CustomButton1 content="Resume"/>
                </div>
                <div className="flex transform translate-x-1/2 translate-y-1/2 rotate-90 -right-4 bottom-1/2 absolute text-green-700 font-bold font-mono text-3xl select-none">
                    {formatTime(timer.time)}
                </div>
            </div>
        </div>
    );
}
 
export default PersonCard;