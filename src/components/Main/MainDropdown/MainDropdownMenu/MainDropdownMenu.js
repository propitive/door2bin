import React, { useState } from "react";
import { menuNavItems } from "../../utils/constants";
import { Link } from "react-router-dom";

function MainDropdownMenu() {
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);

  return (
    <>
      <ul
        className={
          isDropdownMenu ? "services-submenu clicked" : "services-submenu"
        }
        onClick={() => setIsDropdownMenu(!isDropdownMenu)}
      >
        {menuNavItems.map((item) => {
          return (
            <li className="dropdownMenu__li" key={item.id}>
              <Link
                to={item.path}
                className={item.className}
                onClick={() => setIsDropdownMenu(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default MainDropdownMenu;
