import { React } from 'react';
import { Card } from 'react-bootstrap';

const ListFlashcards = (props) => {
    // if(props.index === )
    if (props.showCollections)
    return (
        <div>
            {console.log('here' , props)}
        </div>
    ); else if (props.showFront && !props.showCollections)
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {console.log('here' , props)}
            <Card className='flashcard-card' style={{ alignContent: 'justify', background: 'red', border: '3px solid black', width: '280px', height: '200px', margin: '20px'}} >
                <Card.Header>
                    {props.currentCollectionName}
                </Card.Header>
                <Card.Body>
                <div>
                    {props.filterFlashcards[props.index].question}
                </div>
                </Card.Body>
                <Card.Footer>
                <div>
                    <button onClick={() => props.backwardAction(props.index)} >Previous Card</button>
                    <button onClick={() => props.forwardAction(props.index)} >Next Card</button>
                </div>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default ListFlashcards;