import React from 'react'
import {Component} from 'react'
import { Card,Form,Button,Container } from 'react-bootstrap/esm';
//import { Form,Button } from 'react-bootstrap/lib/Navbar';
//import { Container } from 'react-bootstrap/lib/Tab';
const { Configuration, OpenAIApi } = require("openai");


class ScientificArticles extends Component{
   constructor(){
    super()
    this.state={
        heading:'The Response from the AI will be shown here ',
        response:'......await the response'
    }
    }

   onFormSubmit= async e=>{
    e.preventDefault()
    const formData= new FormData(e.target),
    formDataObj= Object.fromEntries(formData.entries())

    console.log(formDataObj.articlename)

    //OPENAI

    
const configuration = new Configuration({
    apiKey: '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',
  });
  const openai = new OpenAIApi(configuration);
  
  openai.createCompletion({
     model:"text-davinci-003",
    prompt: `generate articles for the following topic: ${formDataObj.articlename}`  ,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })

  .then((response)=>{
    console.log(response.data);
    this.setState({
        heading: `AI article description suggestions for:${formDataObj.articlename}`,
        response: `${response.data.choices[0].text}`
    })
  });

  
  
  
   }
    
   render(){
    return (
        <div>
        <Container>
        <br/>
        <br/>
        <h1>Generate scientific articles </h1>
        <h4>Generate scientific articles about sex education, simply type any key term </h4>
        <br/>
        <br/>
        <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>What term/topic do you have in mind?</Form.Label>
                <Form.Control
                 type="text"
                 name="articlename"
                 placeholder="Enter Article name"
                />
                <Form.Text className="text-muted">
                    Enter as much information as possible for more accurate descriptions.
                </Form.Text>         
            </Form.Group>

            <Button variant="primary" size="lg" type="submit">
                Get AI Suggestions
            </Button>
        </Form>

        <br/>
        <br/>

        <Card>
            <Card.Body>
                <Card.Title><h1>{this.state.heading}</h1></Card.Title>
                <hr/>
                <br/>
                <Card.Text>
                    <h4>
                        {this.state.response}
                    </h4>
                </Card.Text>
            </Card.Body>
        </Card>
        
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
    )
   }

   
}

export default ScientificArticles;







 
