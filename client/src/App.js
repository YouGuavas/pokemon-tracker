import './styles/App.scss';
import Collections from './components/Collections';
import Collection from './components/Collection';

import { getCardsFromSet, getSetsFromDb } from './utilities/api';
import React, {useEffect, useState} from 'react';



function App() {
  const [cards, setCards] = useState([]);
  const [collections, setCollections] = useState([]);
  const [collection, setCollection] = useState('25TH-Celebrations');
  const [collectionName, setCollectionName] = useState('Celebrations');

  const count = 0;
  async function getCards(coll) {
    const cardList = await getCardsFromSet(coll);
    setCards(cardList);
  }

  function handleCollectionChange(coll, collName) {
    setCollectionName(collName);
    setCollection(coll);
  }
  async function getSets() {
    const setList = await getSetsFromDb();
    setCollections(setList)
    setCollection(setList[0].id);
    setCollectionName(setList[0].name);
  }
  useEffect(() => {
    getSets();
    getCards(collection);
  }, [collection]); 
  return (
    <div className="App">
      <Collections collections={collections} handleChange={(coll, collName) => handleCollectionChange(coll, collName)}/>
      <Collection data={{collection: collectionName, cards, count}} />
    </div>
  );
}

export default App;
