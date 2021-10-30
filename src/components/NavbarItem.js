import React, { Component } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class NavbarItem extends Component {
    constructor(props){
        super(props)
        this.state = {childrenActive: false}
    }
    componentDidMount(){
       this.isActiveItem();
    }

    componentDidUpdate(){
        this.isActiveItem();
    }

    isActiveItem(){
        if ((this.props.location.pathname !== this.props.routeName) && this.state.childrenActive) {
            this.setState({childrenActive: false});
        } else if((this.props.location.pathname === this.props.routeName) && !this.state.childrenActive){
            this.setState({childrenActive: true});
        }
    }
    render() { 
        return (
            <NavLink to={this.props.routeName} className="flex items-center justify-center hover:text-green-600 cursor-pointer mx-14 
                ease-out duration-300 group" activeClassName="text-green-600" exact>
                <FaAngleLeft className={'group-hover:opacity-100 group-hover:text-green-600 group-hover:-translate-x-2 duration-200 transform ease-out'
                 + (this.state.childrenActive ? "opacity-100 text-green-600 text-xl -translate-x-2" : "text-gray-200 text-xl opacity-0 -translate-x-5")} />
                {this.props.children}
                <FaAngleRight className={'group-hover:opacity-100 group-hover:text-green-600 group-hover:translate-x-2 duration-300 transform ease-out'
                 + (this.state.childrenActive ? "opacity-100 text-green-600 text-xl translate-x-2" : "text-gray-200 text-xl opacity-0 translate-x-5")} />

            </NavLink>
        );
    }
}
 
export default withRouter(NavbarItem);