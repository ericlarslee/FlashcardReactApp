import React from 'react';
import { Container, Row } from 'react-bootstrap';

const ListCollections = (props) => {
    if (props.showCollections)
    return (
        <div>
            <Container fluid>
                <Row md={4} >
                    {props.mapCollections()}
                </Row>
            </Container>
        </div>
    );
    return (
        <div>

        </div>
    );
}

export default ListCollections;