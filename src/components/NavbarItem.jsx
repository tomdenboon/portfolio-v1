import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function NavbarItem(props) {
  const { children, routeName, location } = props;
  const isActive = location.pathname === routeName;

  return (
    <NavLink
      to={routeName}
      className="flex items-center justify-center text-sm ease-out cursor-pointer duration-00 hover:text-secondary group"
      activeClassName="text-secondary"
      exact
    >
      <FiChevronLeft
        className={
          'group-hover:opacity-100 group-hover:text-secondary group-hover:-translate-x-2 duration-200 transform ' +
          (isActive
            ? 'opacity-100 text-secondary text-xl -translate-x-2'
            : 'text-xl opacity-0 -translate-x-5')
        }
      />
      {children}
      <FiChevronRight
        className={
          'group-hover:opacity-100 group-hover:text-secondary group-hover:translate-x-2 duration-200 transform ' +
          (isActive
            ? 'text-secondary text-xl opacity-100 translate-x-2'
            : 'text-xl opacity-0 translate-x-5')
        }
      />
    </NavLink>
  );
}

const RouterNavbarItem = withRouter(NavbarItem);

export default RouterNavbarItem;
