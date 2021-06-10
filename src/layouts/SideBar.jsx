import React from "react";
import { Icon, Menu } from 'semantic-ui-react'
import { Button } from "semantic-ui-react";

export default function SideBar() {
  return (
    <div>
      <Menu inverted icon="labeled" vertical>
        <Menu.Item
          name="bullhorn"
        >
          <Icon name="bell" />
          <Button color='facebook'>Job Positions</Button>

        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon name="user circle" />
          <Button color='facebook'>Candidates</Button>
        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon name="user secret" />
          <Button color='facebook'>Employers</Button>
        </Menu.Item>
      </Menu>
    </div>
  );
}