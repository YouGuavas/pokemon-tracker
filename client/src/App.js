import './styles/App.scss';
import Collections from './components/Collections';
import Collection from './components/Collection';

import { getCardsFromSet, getSetsFromDb } from './utilities/api';
import React, {useEffect, useState} from 'react';



function App() {
  const [cards, setCards] = useState([]);
  const [collections, setCollections] = useState([]);
  let cardsIHave = [];
  const [collection, setCollection] = useState('25TH-Celebrations');
  const [collectionName, setCollectionName] = useState('Celebrations');

  const [count, setCount] = useState(0);
  async function getCards(coll) {
    const cardList = await getCardsFromSet(coll);
    setCards(cardList);
  }
  async function getSets() {
    const setList = await getSetsFromDb();
    setCollections(setList)
  }

  function handleCollectionChange(coll, collName) {
    setCollectionName(collName);
    setCollection(coll);
    cardsIHave = [];
    setCount(cardsIHave.length);
  }
  function handleCardsIHave(myCards) {
    cardsIHave = myCards;
    console.log(cardsIHave, myCards)
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
