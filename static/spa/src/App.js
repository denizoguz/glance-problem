import React from 'react';
import DropdownMenu, {DropdownItem, DropdownItemGroup} from '@atlaskit/dropdown-menu';

function App() {
  return (
        <DropdownMenu trigger="Page actions" triggerType="button">
          <DropdownItemGroup>
            <DropdownItem>Edit</DropdownItem>
            <DropdownItem>Share</DropdownItem>
            <DropdownItem>Move</DropdownItem>
            <DropdownItem>Clone</DropdownItem>
            <DropdownItem>Delete</DropdownItem>
            <DropdownItem>Report</DropdownItem>
          </DropdownItemGroup>
        </DropdownMenu>
  );
}

export default App;
