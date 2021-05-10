import React from 'react';

const ListFlashcards = (props) => {
    return (
        <div>
            <ul>
                {props.mapFlashcards()}
            </ul>
        </div>
    );
}

export default ListFlashcards;