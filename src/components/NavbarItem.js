import React, { useState, useLayoutEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

function NavbarItem(props) {
  const [childrenActive, setChildrenActive] = useState(false);

  useLayoutEffect(() => {
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
      className="flex items-center justify-center mx-8 text-sm ease-out cursor-pointer duration-00 hover:text-secondary group"
      activeClassName="text-secondary"
      exact
    >
      <FiChevronLeft
        className={
          "group-hover:opacity-100 group-hover:text-secondary group-hover:-translate-x-2 duration-200 transform " +
          (childrenActive
            ? "opacity-100 text-secondary text-xl -translate-x-2"
            : "text-xl opacity-0 -translate-x-5")
        }
      />
      {props.children}
      <FiChevronRight
        className={
          "group-hover:opacity-100 group-hover:text-secondary group-hover:translate-x-2 duration-200 transform " +
          (childrenActive
            ? "text-secondary text-xl opacity-100 translate-x-2"
            : "text-xl opacity-0 translate-x-5")
        }
      />
    </NavLink>
  );
}

export default withRouter(NavbarItem);
