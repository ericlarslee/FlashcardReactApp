import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';

const ListCollections = (props) => {
    return (
        <div>
            <ul>
                {props.mapCollections()}
                <li>google</li>
            </ul>
        </div>
    );
}

export default ListCollections;