import MainDropdownItem from "../MainDropdown/MainDropdownItem/MainDropdownItem";

const MainDropdown = ({ bulletSymbol, dropdownClassName, dropdownContent }) => {
  return (
    <ul className={"dropdown__ul " + dropdownClassName}>
      {dropdownContent.map((service) => {
        return (
          <MainDropdownItem
            bulletSymbol={bulletSymbol}
            content={service.content}
            liClassName=""
            key={service.id}
            keyValue={service.id}
            title={service.title}
          />
        );
      })}
    </ul>
  );
};

export default MainDropdown;
