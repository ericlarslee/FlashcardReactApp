import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CollectionsCard = (props) => {
    return (
        <div className='card'>
            <img src='dumbPic.jpg' alt='pict'/>
            <div className='container'>    
                {props.name}
            </div>
        </div>
    );
}

export default CollectionsCard;