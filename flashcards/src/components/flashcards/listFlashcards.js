import React from 'react';

const ListFlashcards = (props) => {
    if (props.showCollections)
    return (
        <div>

        </div>
    );return (
        <div>
            <ul>
                {props.mapFlashcards()}
            </ul>
        </div>
    );
}

export default ListFlashcards;