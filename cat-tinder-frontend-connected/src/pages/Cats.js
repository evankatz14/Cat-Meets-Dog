import React, { Component } from 'react'
import {
    Col,
    Container,
    Row,
    ListGroup
} from 'react-bootstrap'

class Cats extends Component {
    render() {
        return (
            <Container>
                <h2>Kitties on the Prowl</h2>
                <Row>
                    <Col xs={12}>
                        <ListGroup>
                        {this.props.cats.map((cat, index) => {
                            return(
                                <ListGroup.Item key={index}>
                                    <div class="card text-white bg-primary mb-3" style={{maxWidth: 600}}>
                                      <div class="card-header">Get to know...</div>
                                      <div class="card-body">
                                        <h4 class="card-title">{cat.name}</h4>
                                        <p class="card-text">Age: {cat.age}</p>
                                        <span className='cat-enjoys'>{cat.name} loves {cat.enjoys}</span>
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

export default Cats
