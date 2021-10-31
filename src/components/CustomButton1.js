import React from 'react';

function CustomButton1(props) {
    return (
        <div className="flex items-center justify-center mr-10 px-5 py-2 rounded-3xl font-mono font-black text-lg
        border-2 border-gray-200 text-gray-200 hover:text-gray-200 hover:bg-green-700 hover:border-opacity-0
        transition-all ease--out duration-300 cursor-pointer select-none">
            {props.content} 
        </div>
    );
}
 
export default CustomButton1;