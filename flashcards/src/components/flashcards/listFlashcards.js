import { React } from 'react';
import { Card } from 'react-bootstrap';

const ListFlashcards = (props) => {
    // if(props.index === )
    if (props.showCollections)
    return (
        <div>
            {console.log('here' , props)}
        </div>
    );return (
        <div>
            {console.log('here' , props)}
            <Card className='flashcard-card' style={{ alignContent: 'justify', background: 'red', border: '3px solid black', width: '280px', height: '200px', margin: '20px'}} >
                <Card.Header>
                    {props.currentCollectionName}
                </Card.Header>
                <Card.Body>
                    {props.filterFlashcards[props.index].question}
                <button onClick={() => props.action(props.index)} >Next Card</button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ListFlashcards;