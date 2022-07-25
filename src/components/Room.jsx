import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import numberWithCommas from '../utils/FormatPrice';

function Room(props) {
    const {room} = props
    return (
        <Container>
        <Row>
            {
                room.map(p => (

                    <Col>
                            <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`${p.image}`} />
                        <Card.Body>
                            <Card.Title>{p.name}</Card.Title>
                            <Card.Text>
                                {numberWithCommas(p.price)} 
                            </Card.Text>
                            <Button variant="primary">Show more</Button>
                        </Card.Body>
                    </Card>
                    </Col>
            
        ))
            }
        </Row>
    </Container>
    );
}

export default Room;