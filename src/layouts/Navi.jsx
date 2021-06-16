import React from "react";
import { Button, Icon, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top" size="large">
                <Container>
                    <Menu.Item name="building outline">
                        <Icon name="user times" size="large" />
            HRMS Project
          </Menu.Item>
          <Menu.Item name="Ana Sayfa" />
          <Menu.Item name="İş ilanları" />
          <Menu.Item name="İş arayanlar" />
          <Menu.Item name="İş verenler" />
          <Menu.Menu position="right">
                        <Menu.Item>
                            <Button.Group>
                                <Button color='blue' attached="left">Sign Up</Button>
                                <Button.Or />
                                <Button positive attached="left" >Sign In</Button>
                            </Button.Group>
                            <Button circular color='linkedin' icon='linkedin' />
                            <Button circular color='google plus' icon='google plus' />
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
