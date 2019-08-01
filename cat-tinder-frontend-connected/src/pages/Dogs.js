import React, { Component } from 'react'
import {
    Col,
    Container,
    Row,
    ListGroup
} from 'react-bootstrap'

class Dogs extends Component {
    render() {
        return (
            <Container>
                <h2>Puppers on the Trail</h2>
                <Row>
                    <Col xs={12}>
                        <ListGroup>
                        {this.props.dogs.map((dog, index) => {
                            return(
                                <ListGroup.Item key={index}>
                                    <div class="card text-white bg-primary mb-3" style={{maxWidth: 600}}>
                                      <div class="card-header">Get to know...</div>
                                      <div class="card-body">
                                        <h4 class="card-title">{dog.name}</h4>
                                        <p class="card-text">Age: {dog.age}</p>
                                        <span className='cat-enjoys'>{dog.name} loves {dog.enjoys}</span>
                                      </div>
                                    </div>
                                </ListGroup.Item>
                            )
                        })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Dogs
