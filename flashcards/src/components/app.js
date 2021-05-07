import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import CollectionsCard from './collections/collectionsCard';
import ListCollections from './collections/listCollections';


const App = props => {
    const [state, setState] = useState ({
        collections: [],
        flashcards: [],
    });
    
    // state = {
    //     collections: [],
    //     flashcards: [],
    // }

    useEffect(() => {
        getCollections();
    });

    const getCollections = async () => {
        let response = await axios.get(`http://127.0.0.1:8000/collections/`);
        let response2 = await axios.get(`http://127.0.0.1:8000/flashcards/`)
        setState({collections: response.data, flashcards:response2.data});
        console.log(state);
    }

    

    const mapCollections = (collections) => {
        return collections.map(collection =>
            <CollectionsCard
            key={collection.id}
            name={collection.name}
            />
        );
    }

   
    return(
        <div>
        <ListCollections mapCollections={() => mapCollections(state.collections)} collections={state.collections} />
        </div>
        );

}

export default App;
