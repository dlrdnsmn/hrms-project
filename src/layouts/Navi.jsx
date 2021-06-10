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
                    <Menu.Item name="Home" />
                    <Menu.Item name="Job Advert" />
                    <Menu.Item name="Companies" />
                    <Menu.Item name="CV's" />
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Button.Group>
                                <Button color='blue'>Sign Up</Button>
                                <Button.Or />
                                <Button positive>Sign In</Button>
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
