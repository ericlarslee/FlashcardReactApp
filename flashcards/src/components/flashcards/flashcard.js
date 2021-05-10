import React from 'react';

const Flashcard = (props) => {
    if(props.showCollections) {
        return (
        <div>
            <li></li>
        </div>
    );
    } return (
        <div>
            <li>{props.question}</li>
        </div>
    );
}

export default Flashcard;