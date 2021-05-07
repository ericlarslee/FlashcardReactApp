import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CollectionsCard from './collections/collectionsCard';
import ListCollections from './collections/listCollections';
import Flashcard from './flashcards/flashcard';
import ListFlashcards from './flashcards/listFlashcards';


const App = props => {
    const [state, setState] = useState ({
        collections: [],
        showCollections: true,
        flashcards: [],
    });

    const [showFlashcards, setShowFlashcards] = useState(true);
    
    // state = {
    //     collections: [],
    //     flashcards: [],
    // }

    useEffect(() => {
        getCollections();
    }, []);

    const getCollections = async () => {
        let response = await axios.get(`http://127.0.0.1:8000/collections/`);
        let response2 = await axios.get(`http://127.0.0.1:8000/flashcards/`)
        setState({collections: response.data, flashcards:response2.data});
        console.log(state);
    }

    // const onClickCollections = async (event) => {

    // }

    const onClickFlashcards = () => {
        setState({...state,showCollections: !state.showCollections})
    }
    

    const mapCollections = (collections) => {
        return collections.map(collection =>
            <CollectionsCard
            key={collection.id}
            name={collection.name}
            />
        );
    }

    const mapFlashcards = (flashcards) => {
        return flashcards.map(flashcard =>
            <Flashcard
                question={flashcard.question}
                showCollections={state.showCollections}
            />
            );
    }

   
    return(
        <div>
        <button onClick={() => onClickFlashcards()}>Toggle</button>
        <ListCollections mapCollections={() => mapCollections(state.collections)} collections={state.collections} />
        <ListFlashcards mapFlashcards={() => mapFlashcards(state.flashcards)} flashcards={state.flashcards} />
        </div>
        );

}

export default App;
