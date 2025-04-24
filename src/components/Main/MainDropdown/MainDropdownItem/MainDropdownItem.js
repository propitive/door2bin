import { useState } from "react";

import MainDropdownBulletpoint from "../MainDropdownBulletpoint/MainDropdownBulletpoint";

const MainDropdownItem = ({
  bulletSymbol,
  content,
  liClassName,
  keyValue,
  title,
}) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownItemButton = isActive ? "dropdown-item__button-active" : null;

  return (
    <>
      <li
        className={"dropdown-item " + liClassName}
        key={keyValue}
        onClick={() => setIsActive(!isActive)}
      >
        <p className="dropdown-item__title">{title}</p>
        <button
          className={"dropdown-item__button " + dropdownItemButton}
          type="button"
        ></button>
      </li>
      <ul className="dropdown-item__bulletpoints">
        {content.map((bulletpoint) => {
          return (
            <MainDropdownBulletpoint
              bulletpoint={bulletpoint}
              bulletSymbol={bulletSymbol}
              isActive={isActive}
              key={bulletpoint}
            />
          );
        })}
      </ul>
    </>
  );
};

export default MainDropdownItem;
