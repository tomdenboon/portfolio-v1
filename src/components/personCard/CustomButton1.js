import React from 'react';

function CustomButton1(props) {
    return (
        <div className="flex items-center justify-center px-4 py-2 rounded
        border-2 border-green-700 text-green-700 hover:bg-green-700 hover:bg-opacity-10 hover:border-opacity-100
        transition-all ease--out duration-300 cursor-pointer select-none">
            {props.title} 
        </div>
    );
}
 
export default CustomButton1;