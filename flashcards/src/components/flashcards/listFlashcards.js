import React from 'react';

const ListFlashcards = (props) => {
    return (
        <div>
            <ul>
                {props.mapFlashcards()}
                <li> lil stupidass</li>
            </ul>
        </div>
    );
}

export default ListFlashcards;