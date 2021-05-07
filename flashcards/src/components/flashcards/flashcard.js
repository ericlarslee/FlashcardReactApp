import React from 'react';

const Flashcard = (props) => {
    if(props.showCollections) {
        return (
        <div>
            <li>{props.question}</li>
        </div>
    );
    } return (
        <div>

        </div>
    );
}

export default Flashcard;