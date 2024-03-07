import { NavLink } from "react-router-dom";
import { SIDEBAR_MAPPING } from "../constants";
import { nanoid } from "nanoid";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="sidebar_drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        {SIDEBAR_MAPPING.map((sidebarItem) => {
          return (
            <li key={nanoid()}>
              <NavLink to={sidebarItem.path}>{sidebarItem.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
