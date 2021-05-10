import { React, useState, useEffect } from 'react';
import axios from 'axios';
import CollectionsCard from './collections/collectionsCard';
import ListCollections from './collections/listCollections';
import Flashcard from './flashcards/flashcard';
import ListFlashcards from './flashcards/listFlashcards';


const App = () => {
    const [collections, setCollections] = useState([]);
    const [showCollections, setShowCollections] = useState(true);
    const [flashcards, setFlashcards] = useState([]);
    const [filterFlashcards, setFilterFlashcards] = useState([]);
    

    useEffect(() => {
        getCollections();
    }, []);

    async function getCollections() {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/collections/`);
            setCollections( response.data );
        } catch (error) {
            console.log(error.mesage);
        }
        try{
            let response2 = await axios.get(`http://127.0.0.1:8000/flashcards/`);
            setFlashcards(response2.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    function onClickCollections(collectionId) {
        let temp = flashcards.filter(id => collectionId.includes( id.collection ))
        setFilterFlashcards(temp);
        setShowCollections(false);
    }

    //set state for showing front when true, back when false. create incrementor that will allow for shuffling through of flashcards and give the same option for each.
    

    function mapCollections(collections){
        return collections.map(collection =>
            <CollectionsCard
            key={collection.id}
            name={collection.name}
            url={collection.url}
            selectCollection={() => onClickCollections(collection.url)}
            />
        );
    }

    function mapFlashcards(flashcards){
        return flashcards.map(flashcard =>
            <Flashcard
                key={flashcard.id}
                question={flashcard.question}
                collection={flashcard.collection}
            />
            );
    }

    return(
        <div>
        <ListCollections mapCollections={() => mapCollections(collections)} collections={collections} showCollections={showCollections} />
        <ListFlashcards mapFlashcards={() => mapFlashcards(filterFlashcards)} flashcards={flashcards} showCollections={showCollections} />
        </div>
    );
}

export default App;
