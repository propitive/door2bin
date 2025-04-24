import checkSquare from "../../../../images/icons/check-square.svg";

const MainDropdownBulletpoint = ({ bulletpoint, bulletSymbol, isActive }) => {
  const bulletpointsClassName = isActive
    ? "dropdown-bulletpoint__expanded"
    : null;

  return (
    <li className={"dropdown-bulletpoint " + bulletpointsClassName}>
      {/* <img
        className="dropdown-bulletpoint__bulletsymbol"
        src={bulletSymbol || checkSquare}
        alt="Bulletpoint's Icon"
      /> */}

      <p className="dropdown-bulletpoint__text">{bulletpoint}</p>
    </li>
  );
};

export default MainDropdownBulletpoint;
