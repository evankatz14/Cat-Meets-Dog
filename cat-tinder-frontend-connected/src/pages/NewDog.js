import React, { Component } from 'react'
import {
    Col,
    Container,
    Row,
    Form,
    Button
} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Redirect
} from 'react-router-dom'

class NewDog extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: '',
                age: '',
                enjoys: ''
            }
        }
    }

    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form })
    }

    handleClick = () => {
        this.props.handleNewDog(this.state.form)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder = "Name"
                                onChange={this.handleChange}
                                value={this.state.form.name}
                            />
                        </Form.Group>
                        <Form.Group controlId="age">
                            <Form.Label>Age</Form.Label>
                            <Form.Control
                                type="text"
                                name="age"
                                placeholder = "Age"
                                onChange={this.handleChange}
                                value={this.state.form.age}
                            />
                        </Form.Group>
                        <Form.Group controlId="enjoys">
                            <Form.Label>Interests</Form.Label>
                            <Form.Control
                                type="text"
                                name="enjoys"
                                placeholder = "ie: scratching, cuddling, the outside..."
                                onChange={this.handleChange}
                                value={this.state.form.enjoys}
                            />
                        </Form.Group>
                        <Button
                            variant='primary'
                            type="submit"
                            onClick={this.handleClick}>
                            Create Dog Profile
                        </Button>
                        {this.props.success &&
                            <Redirect to="/dogs"/>
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default NewDog
