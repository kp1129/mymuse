import React, { useContext } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { StateContext } from "./contexts/StateContext";
import HeaderModal from "./HeaderModal";
import MilestonesContainer from "./MilestonesContainer";

function Header() {
  const { dropdownOpen, setDropdownOpen } = useContext(StateContext);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="header">
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle className="mymuse-menu-toggle" caret>
          Menu
        </DropdownToggle>
        <DropdownMenu className="mymuse-menu">
          <DropdownItem className="mymuse-dropdown-item">Dark mode</DropdownItem>
          <DropdownItem className="mymuse-dropdown-item">Save locally</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <HeaderModal />

      <MilestonesContainer />
    </div>
  );
}

export default Header;
