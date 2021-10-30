import React, { Component } from 'react';
import CustomButton1 from './CustomButton1';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="shadow-2xl divide-x divide-gray-900 font flex text-gray-200 bg-gray-800 rounded-md" style={{width: "1000px", height: "500px"}}>
                <div className="w-1/3 h-full items-center flex flex-col">
                    <div className="mt-16 h-48 w-48 rounded-full bg-gray-200">

                    </div>
                    <div className="text-3xl font-serif font-black mt-5">
                        Tom den Boon
                    </div>
                    <div className="text-lg text-green-700 font-mono font-black mt-4">
                        Software Developer
                    </div>
                </div>
                <div className="w-2/3 h-full flex flex-col p-10">
                    <div className="flex flex-col text-7xl font-bold pt-2">
                        Hello,
                        <div className="h-1 ml-16 mt-2 w-16 bg-green-700"></div>
                    </div>
                    <div>
                        loves learning new, and improving. Can work on all parts of the stack.
                    </div>
                    <div className="flex w-full">
                        <CustomButton1 content="Projects"/>
                        <CustomButton1 content="Resume"/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default PersonCard;