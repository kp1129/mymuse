import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ChallengeModal from "./ChallengeModal";
import MilestonesContainer from "./MilestonesContainer";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

      <ChallengeModal />

      <MilestonesContainer />
    </div>
  );
}

export default Header;
