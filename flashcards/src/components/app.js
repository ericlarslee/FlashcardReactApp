import { React, useState, useEffect } from 'react';
import axios from 'axios';
import CollectionsCard from './collections/collectionsCard';
import ListCollections from './collections/listCollections';
// import Flashcard from './flashcards/flashcard';
import ListFlashcards from './flashcards/listFlashcards';


const App = () => {
    const [collections, setCollections] = useState([]);
    const [showCollections, setShowCollections] = useState(true);
    const [flashcards, setFlashcards] = useState([]);
    const [filterFlashcards, setFilterFlashcards] = useState([]);
    const [currentCollectionName, setCurrentCollectionName] = useState();
    const [index, setIndex] = useState(0);
    

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

    function onClickCollections(collectionName, collectionId) {
        let temp = flashcards.filter(flashcard => collectionId.includes( flashcard.collection ));
        setFilterFlashcards(temp);
        setShowCollections(false);
        setCurrentCollectionName(collectionName);
    }

    function handleCallback(value){
        let arrLength = filterFlashcards.length - 1;
        let next = value + 1
        if (next > arrLength){
            setIndex(0);
        }else if(next<0){
            setIndex(arrLength);
        }else{
        setIndex(next);
        }
    }

    //set state for showing front when true, back when false. create incrementor that will allow for shuffling through of flashcards and give the same option for each.
    

    function mapCollections(collections){
        return collections.map(collection =>
            <CollectionsCard
            key={collection.id}
            collection={collection}
            name={collection.name}
            url={collection.url}
            selectCollection={() => onClickCollections(collection.name, collection.url)}
            />
        );
    }

    // function mapFlashcards(flashcards){
    //     return flashcards.map(flashcard =>
    //         <Flashcard
    //             key={flashcard.id}
    //             question={flashcard.question}
    //             collection={flashcard.collection}
    //         />
    //         );
    // }

    return(
        <div>
        
        {console.log(filterFlashcards)}
        <ListCollections mapCollections={() => mapCollections(collections)} collections={collections} showCollections={showCollections} />
        <ListFlashcards filterFlashcards={filterFlashcards} showCollections={showCollections} currentCollectionName={currentCollectionName} index={index} action={handleCallback} />
        </div>
    );
}

export default App;
