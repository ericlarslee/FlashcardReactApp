import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CollectionsCard = (props) => {
    if(props.showCollections) {
        return (
            <div>
                <Col >
                    <Card style={{ textAlign: 'center', background: 'red', border: '3px solid black', width: '280px', height: '200px',}}>
                        <Card.Body style={{textAlign:'center'}}>
                            {props.name}
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        );
    } return (
        <div>

        </div>
    );
}

export default CollectionsCard;