import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CollectionsCard from './collections/collectionsCard';
import ListCollections from './collections/listCollections';
import Flashcard from './flashcards/flashcard';
import ListFlashcards from './flashcards/listFlashcards';


const App = () => {
    const [state, setState] = useState ({
        collections: [],
        showCollections: true,
        flashcards: [],
        filterFlashCards: [],
    });

    // const [showFlashcards, setShowFlashcards] = useState(true);
    
    // state = {
    //     collections: [],
    //     flashcards: [],
    // }

    useEffect(() => {
        getCollections();
    }, []);

    const getCollections = async () => {
        let response = await axios.get(`http://127.0.0.1:8000/collections/`);
        let response2 = await axios.get(`http://127.0.0.1:8000/flashcards/`);
        console.log(response.keys + 'split' + response2.keys);
        setState({collections: response.data, flashcards:response2.data});
        console.log(state.collections.keys)
    }

    // const onClickCollections = async (event) => {

    // }

    const onClickFlashcards = () => {
        setState({...state,showCollections: !state.showCollections})
    }

    // onClickCollections = (collectionId) => {
        
    // }

    //set state for showing front when true, back when false. create incrementor that will allow for shuffling through of flashcards and give the same option for each.
    

    const mapCollections = (collections) => {
        return collections.map(collection =>
            <CollectionsCard
            key={collection.id}
            name={collection.name}
            showCollections={state.showCollections}
            />
        );
    }

    const mapFlashcards = (flashcards) => {
        return flashcards.map(flashcard =>
            <Flashcard
                question={flashcard.question}
                showCollections={state.showCollections}
                collection={flashcard.collection}
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
