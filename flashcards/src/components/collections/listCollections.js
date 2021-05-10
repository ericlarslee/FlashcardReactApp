import React from 'react';
import { Container, Row } from 'react-bootstrap';

const ListCollections = (props) => {
    return (
        <div>
            <Container fluid>
                <Row md={4} >
                    {props.mapCollections()}
                </Row>
            </Container>
        </div>
    );
}

export default ListCollections;