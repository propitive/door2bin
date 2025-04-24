import { Link } from "react-router-dom";

function SidebarDropdownBulletpoint({ bulletpoint, isActive, showSidebar }) {
  const bulletpointsClassName = isActive
    ? "sidebar-dropdown-bulletpoint__expanded"
    : null;

  return (
    <li className={"sidebar-dropdown-bulletpoint " + bulletpointsClassName}>
      <Link to={bulletpoint.link} onClick={showSidebar}>
        {/* <p className="sidebar-dropdown-bulletpoint__text">
          {bulletpoint.title}
        </p> */}
        <span>{bulletpoint.title}</span>
      </Link>
    </li>
  );
}

export default SidebarDropdownBulletpoint;
