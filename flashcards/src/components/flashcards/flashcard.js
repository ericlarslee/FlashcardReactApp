import React from 'react';

const Flashcard = (props) => {
    return (
        <div>
            <li>{props.question}</li>
        </div>
    );
}

export default Flashcard;