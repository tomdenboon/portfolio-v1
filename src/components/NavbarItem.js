import React, { Component } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


class NavbarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="flex items-center justify-center hover:text-green-600 cursor-pointer mx-14 
                ease-out duration-300 group">
                <FaAngleLeft className="text-gray-200 text-xl opacity-0 group-hover:opacity-100 group-hover:text-green-600 transform  
                duration-300 ease-out -translate-x-5 group-hover:-translate-x-2" />
                {this.props.children}
                <FaAngleRight className="text-gray-200 text-xl opacity-0 group-hover:opacity-100 group-hover:text-green-600 transform  
                duration-300 ease-out translate-x-5 group-hover:translate-x-2" />
            </div>
        );
    }
}
 
export default NavbarItem;