import { dropdownContentMenu } from "../../../utils/dropdownContent";
import checkSquare from "../../../images/icons/check-square.svg";

import MainDropdown from "../MainDropdown/MainDropdown";

function MainServices() {
  return (
    <div className="main-services">
      <div className="main-services__container">
        <div className="main-services__text">
          <div className="main-services__text-container">
            <h2 className="main-services__header">
              Door2Bin's Seamless Process: <br />
              <span className="main-services__bold-text">Convenient</span>,{" "}
              <span className="main-services__bold-text">Clean</span>,{" "}
              <span className="main-services__bold-text">Efficient</span> - Our
              expertise,{" "}
              <span className="main-services__bold-text">your advantage</span>.
            </h2>
            <p className="main-services__paragraph">
              Imagine never having to haul trash to the dumpster again or deal
              with overflowing waste areas; with Door2Bin, your multi-family
              community stays clean and hassle-free. Reduce maintenance costs,
              eliminate waste-related complaints, and keep your community
              spotless.
            </p>
          </div>
        </div>
        <div className="main-services__dropdowns">
          {/* <h2 className="main-services__header">
          <span className="main-services__bold-text"></span>
          Our Process
        </h2> */}
          <MainDropdown
            bulletSymbol={null}
            dropdownClassName="main-services__dropdown"
            dropdownContent={dropdownContentMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default MainServices;
