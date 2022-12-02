import React from 'react'
import {Component} from 'react'
import Display from './Display';
import {Container, Row, Col, Carousel} from 'react-bootstrap'
class Home extends Component{
    render(){
        return(
            <div>
                <br/>
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            alt="Your cool AI Sex Ed Teacher"/>

                        </Carousel.Item>
                    </Carousel>
                    <br/>
                    <br/>
                    <h1>Our cool AI gives you all the ressources you need to get knowledge about sex education</h1>
                    <p>Start by picking any of the usecases below to start generating answers with AI.</p>
                    <br/>
                    <br/>
                    <Row>
                        <Col>
                        <Display
                            header="Scientific articles about sex education"
                            title="Generate scientific articles "
                            text="Generate articles related to any sex education related topic, simply type any term you have in mind"
                            theLink="/scientific articles"
                            
                        /> 
                        </Col>

                        <Col>
                        <Display
                            header="Youtube videos about sex education"
                            title="Generate youtube videos "
                            text="Generate  youtube videos related to any sex education related topic, simply type any term you have in mind"
                            theLink="/youtube videos"
                            
                        /> 
                        </Col>

                        <Col>
                        <Display
                            header="Ask any question about sex education"
                            title="Ask any specific question about sex education "
                            text="You got a specific question and you want an answer quickly? Don't worry just ask and our AI answers you"
                            theLink="/Ask me a specific question"
                            
                        /> 
                        </Col>

                        <Col>
                        <Display
                            header="Tweet about it "
                            title="Share your knowledge with your friends on twitter or any other social network "
                            text="Teach your friends too !
                            Can't come up with a cool tweet or caption don't worry our AI will generate it for you"
                            theLink="/tweets"
                            
                        /> 
                        </Col>
                    </Row>

                     
                </Container>
            </div>
        )
    }
}

export default Home;