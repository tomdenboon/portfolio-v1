import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

function NavbarItem(props) {
  const [childrenActive, setChildrenActive] = useState(false);

  useEffect(() => {
    isActiveItem();
  });

  const isActiveItem = () => {
    if (props.location.pathname !== props.routeName && childrenActive) {
      setChildrenActive(false);
    } else if (props.location.pathname === props.routeName && !childrenActive) {
      setChildrenActive(true);
    }
  };

  return (
    <NavLink
      to={props.routeName}
      className="flex items-center justify-center hover:text-green-600 cursor-pointer mx-8 
            ease-out duration-300 group text-sm"
      activeClassName="text-green-600"
      exact
    >
      <FiChevronLeft
        className={
          "group-hover:opacity-100 group-hover:text-green-600 group-hover:-translate-x-2 duration-200 transform ease-out" +
          (childrenActive
            ? "opacity-100 text-green-600 text-xl -translate-x-2"
            : "text-gray-200 text-xl opacity-0 -translate-x-5")
        }
      />
      {props.children}
      <FiChevronRight
        className={
          "group-hover:opacity-100 group-hover:text-green-600 group-hover:translate-x-2 duration-300 transform ease-out" +
          (childrenActive
            ? "opacity-100 text-green-600 text-xl translate-x-2"
            : "text-gray-200 text-xl opacity-0 translate-x-5")
        }
      />
    </NavLink>
  );
}

export default withRouter(NavbarItem);
