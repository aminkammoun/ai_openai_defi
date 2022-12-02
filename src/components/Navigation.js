 import React from "react"
 import { Component } from "react"
 //import 'boostrap/dist/css/boostrap.css'
 
 import {Nav,Navbar} from 'react-bootstrap'


export class Navigation extends Component{
    render(){
        return(
            <div>

                <Navbar bg="dark" variant="dark" sticky="top" expand="md" collapseOnSelect>

                    <Navbar.Brand href="/">
                     <img src={"../src/logo.svg"} width="50px"/>
                     Your Cool AI Sex Ed Teacher

                    </Navbar.Brand>

                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="scientific articles"> Scientific Articles</Nav.Link>
                            <Nav.Link href="youtube videos"> Youtube Videos</Nav.Link>
                            <Nav.Link href="Ask me a specific question"> Ask me a specific question</Nav.Link>
                            <Nav.Link href="tweets"> Tweet about it</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>

 
            </div>
        )
    }


 }

 export default Navigation;