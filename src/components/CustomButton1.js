import React, { Component } from 'react';

class CustomButton1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="flex items-center justify-center mr-10 px-8 py-2 rounded-3xl font-mono font-black text-xl
            border-2 border-gray-200 text-gray-200 hover:text-gray-200 hover:bg-green-700 hover:border-opacity-0
            transition-all ease--out duration-300 cursor-pointer">
               {this.props.content} 
            </div>
          );
    }
}
 
export default CustomButton1;