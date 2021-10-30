import React, { Component } from 'react';
import { FaLongArrowAltDown } from 'react-icons/fa';

class BottomArrow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="group absolute bottom-4 flex flex-col items-center justify-center cursor-pointer transform hover:translate-y-2 duration-300">
                <span class="absolute ml-3 mb-11 flex h-3 w-3 group-hover:opacity-0 ease-in duration-300">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-600 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span>
                </span>
                <FaLongArrowAltDown className="text-gray-200 text-5xl group-hover:text-gray-400" />
            </div>
        );
    }
}

export default BottomArrow;