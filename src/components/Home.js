import React, { Component } from 'react';
import PersonCard from "./PersonCard";
import BottomArrow from "./BottomArrow";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
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
}
 
export default Home;