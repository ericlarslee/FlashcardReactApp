import { React, useState, useEffect } from 'react';
import axios from 'axios';
import CollectionsCard from './collections/collectionsCard';
import ListCollections from './collections/listCollections';
// import Flashcard from './flashcards/flashcard';
import ListFlashcards from './flashcards/listFlashcards';
import { useFlashcard } from './flashcards/useFlashcard';


const App = () => {
    const [collections, setCollections] = useState([]);
    const [showCollections, setShowCollections] = useState(true);
    const [flashcards, setFlashcards] = useState([]);
    const [filterFlashcards, setFilterFlashcards] = useState([]);
    const [currentCollection, setCurrentCollection] = useState([]);
    const [currentCollectionName, setCurrentCollectionName] = useState();
    const [index, setIndex] = useState(0);
    const [showFront, setShowFront] = useState(null);
    const [addFlashcard, setAddFlashcard] = useFlashcard({question: '', answer:'', collection: {currentCollection}});
    const [showNewCardForm, setShowNewCardForm] = useState(true);

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

async function postFlashcard(flashcard) {
    let response = await axios.post(`http://127.0.0.1:8000/flashcards/`, flashcard);
    console.log(response);
}

    async function deleteCollection(collectionId) {
        let response = await axios.delete(collectionId)
        console.log(response)
        getCollections();
    }

    function onClickCollections(collectionName, collectionId) {
        let temp = flashcards.filter(flashcard => collectionId.includes( flashcard.collection ));
        setFilterFlashcards(temp);
        setShowCollections(false);
        setCurrentCollectionName(collectionName);
        setCurrentCollection(collectionId);
        setShowFront(true);
    }

    function handleNextCardCallback(value){
        let arrLength = filterFlashcards.length - 1;
        let next = value + 1
        if (next > arrLength){
            setIndex(0);
        }else{
        setIndex(next);
        setShowFront(true);
        }
    }

    function handleLastCardCallback(value){
        let arrLength = filterFlashcards.length -1;
        let last = value -1
        if(last < 0){
            setIndex(arrLength)
        }else{
            setIndex(last);
        }
    }

    function mapCollections(collections){
        return collections.map(collection =>
            <CollectionsCard
            key={collection.id}
            collection={collection}
            name={collection.name}
            url={collection.url}
            selectCollection={() => onClickCollections(collection.name, collection.url)}
            delete={deleteCollection}
            />
        );
    }

    if (!showNewCardForm)
    return(
        <div>
        <ListCollections mapCollections={() => mapCollections(collections)} collections={collections} showCollections={showCollections}/>
        <ListFlashcards filterFlashcards={filterFlashcards} showCollections={showCollections} currentCollectionName={currentCollectionName} index={index} forwardAction={handleNextCardCallback} backwardAction={handleLastCardCallback} showFront={showFront} flip={setShowFront}/>
        </div>
    );else;
    return(
        <div>
        <ListCollections mapCollections={() => mapCollections(collections)} collections={collections} showCollections={showCollections}/>
        <ListFlashcards filterFlashcards={filterFlashcards} showCollections={showCollections} currentCollectionName={currentCollectionName} index={index} forwardAction={handleNextCardCallback} backwardAction={handleLastCardCallback} showFront={showFront} flip={setShowFront}/>
            <div style= {{display: 'flex', justifyContent: 'center', alignItems: 'center', border: '3px solid black', marginBottom:'50px', width: '300px'}}>
                <form >
                    <p>Add a flashcard!</p>
                    <input name='question' value={addFlashcard.question} onChange={setAddFlashcard} placeholder='Enter flashcard question'/>
                    <br />
                    <input name='answer' value={addFlashcard.answer} onChange={setAddFlashcard} placeholder="Enter flashcard answer"/>
                    <button onClick={() => postFlashcard(addFlashcard)}>Add flashcard</button>
                </form>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default App;
