import React, { Component } from 'react';
import axios from 'axios';
import CollectionsCard from './collectionsCard';
import ListCollections from './listCollections';


class App extends Component{
    state = {
        collections: [],
    }

    componentDidMount() {
        this.getCollections();
    }

    getCollections = async () => {
        let response = await axios.get(`http://127.0.0.1:8000/collections/`);
        this.setState({
            collections: response.data
        });
        console.log(this.state.collections);
    }

    mapCollections(collections){
        return collections.map(collection =>
            <CollectionsCard
            key={collection.id}
            name={collection.name}
            />
            );
    }

    render() {
        return(
            <div>
            <ListCollections mapCollections={() => this.mapCollections(this.state.collections)} />
            </div>
        );
    }
}


export default App;