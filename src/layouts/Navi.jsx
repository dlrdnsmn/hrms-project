import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'



export default function Navi() {

    const [state, setState] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    let history = useHistory()
    function handleSignOut(params) {
        setIsAuthenticated(false);
        history.push("/")

    }
    function handleSignIn(params) {
        setIsAuthenticated(true);


    }


    const buttonStyle2 = {
        width: 120,
        height: 45,
        color: "white",
        backgroundColor: "#008080",
        textAlign: "center",
        borderColor: "#008080",
        marginRight: 20,
        borderRadius: 10,

    }

    const fontStyle = {
        fontFamily: "Mukta",
        fontWeight: 700,
        fontSize: "1.4rem",
        color: "white"



    }

    const fontStyle2 = {
        fontFamily: "Mukta",
        fontWeight: 450,
        fontSize: "1.7rem",
        color: "black"



    }


    const handleItemClick = (e, { name }) => setState({ activeItem: name })
    const { activeItem } = state
    return (



        <Menu stackable fixed="top" secondary style={{
            padding: "10px 0",
            position: "relative",
            border: "1px solid #f1f5f8"
        }} >

            <Menu.Item style={{ marginLeft: 80 }}  >
                <img src='https://3.imimg.com/data3/IU/NA/MY-4439715/hrms-500x500.jpg' />
            </Menu.Item>

            <Menu.Item style={{ marginRight: 20 }} active={activeItem === "/"} onClick={handleItemClick} as={NavLink} to="/">
                <h1 style={fontStyle2}>Ana Sayfa</h1>
            </Menu.Item>

            <Menu.Item style={{ marginRight: 20 }} active={activeItem === "ResumeDetail"} onClick={handleItemClick} as={NavLink} to="/api/cv/getAll">
                <h1 style={fontStyle2} >Cv Listesi</h1>
            </Menu.Item>

            <Menu.Item style={{ marginRight: 20 }} active={activeItem === "jobAdvertisementList"} onClick={handleItemClick} as={NavLink} to="/jobAdvertisementList">
                <h1 style={fontStyle2} >İş İlanları</h1>
            </Menu.Item>

            <Menu.Item style={{ marginRight: 20 }} active={activeItem === "ConfirmJobAdvertisement"} onClick={handleItemClick} as={NavLink} to="/JobAdvertisementConfirm">
                <h1 style={fontStyle2} >İlan Onayı</h1>
            </Menu.Item>



            <Menu.Menu stackable="true" position="right">

                {


                    isAuthenticated ?
                        <div style={{ display: "flex", alignContent: "center", alignItems: "center" }}>

                            <Button style={buttonStyle2} onClick={handleItemClick} as={NavLink} to="/addAdvertisement">
                                <h1 style={fontStyle} >İlan Ekle</h1>
                            </Button>
                            <SignedIn signOut={handleSignOut} bisey="1" />
                        </div> :

                        <SignedOut signIn={handleSignIn} />








                }
            </Menu.Menu>


        </Menu>







    )
}