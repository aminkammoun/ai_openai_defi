import React from 'react'
import {Component} from 'react'
import { Nav,Card,Button } from 'react-bootstrap';



class Display extends Component{
    render(){
        const{ header, Title, text, theLink}=this.props
        return(
            <div>
            <Card>
                <Card.Header>{header}</Card.Header>
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>

                    <Nav.Link href={theLink}>
                        <Button variant="primary" size="lg">Get Started</Button>

                    </Nav.Link>

                </Card.Body>
            </Card>
            </div>
        )
    }
}

export default Display;