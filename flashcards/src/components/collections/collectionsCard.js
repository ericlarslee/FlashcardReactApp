import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CollectionsCard = (props) => {
    return (
        <div>
            <Col >
                <Card onClick={() => props.selectCollection()} style={{ alignContent: 'center', textAlign: 'center', background: 'red', border: '3px solid black', width: '280px', height: '200px', margin: '20px'}}>
                    <Card.Body style={{textAlign:'center'}}>
                        {props.name}
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default CollectionsCard;