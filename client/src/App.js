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
  let exampleCards = [];
  const [cardsIHave, setCardsIHave] = useState(exampleCards);
  const [count, setCount] = useState(cardsIHave.length);
  async function getCards(coll) {
    const cardList = await getCardsFromSet(coll);
    setCards(cardList);
  }
  async function getSets() {
    const setList = await getSetsFromDb();
    setCollections(setList)
  }

  async function handleCollectionChange(coll, collName) {
    //setCardsIHave(localStorage['cardsIHave'] ? JSON.parse(localStorage['cardsIHave'])[collName] : []);
    setMyCollections(coll, collName);
    setCount(cardsIHave.length);
  }
  function setMyCollections (coll, collName) {
    setCollectionName(collName);
    setCollection(coll);
  }


  function handleCardsIHave(myCards) {
    //cardsIHave = localStorage.getItem('cardsIHave'[collectionName]) || myCards;
  }

  useEffect(() => {
    getSets();
  }, [collections.length]);


  useEffect(() => {
    getCards(collection);
  }, [collection]); 
  return (
    <div className="App">
      <Collections collections={collections} handleChange={(coll, collName) => handleCollectionChange(coll, collName)}/>
      {cards.length > 0 ? <Collection setCount={setCount} setCardsIHave={handleCardsIHave} data={{collection: collectionName, cards, count, cardsIHave}} /> : null}
    </div>
  );
}

export default App;
