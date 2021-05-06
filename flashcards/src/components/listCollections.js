import React from 'react';

const ListCollections = (props) => {
    return (
        <div>
            {props.mapCollections()}
        </div>
    );
}

export default ListCollections;