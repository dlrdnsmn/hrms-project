import React from 'react'
import { Dropdown, Menu, Image} from 'semantic-ui-react'

export default function SignIn({signOut}) {
    
    return (
        <div>
        <Menu.Item>
            <Image avatar spaced ="right" src= ""/>
            <Dropdown pointig= "top left" text= "Dilara Danışman">
                <Dropdown.Menu>
            <Dropdown.Item text = "bilgilerim" icon="info"/>
            <Dropdown.Item onClick={signOut} text = "çıkış yap" icon="sign-out"/>
            </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
    )
}