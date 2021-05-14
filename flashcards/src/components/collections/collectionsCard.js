import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CollectionsCard = (props) => {
    return (
        <div style= {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Col >
                <Card style={{ alignContent: 'center', textAlign: 'center', background: 'red', border: '3px solid black', width: '280px', height: '200px', margin: '20px'}}>
                    <Card.Header  style={{textAlign:'center'}}>
                        {props.name}
                    </Card.Header>
                    <Card.Body>
                        <button onClick={() => props.delete(props.url)}>Delete Collection</button>
                    </Card.Body>
                    <Card.Footer onClick={() => props.selectCollection()}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
}

export default CollectionsCard;