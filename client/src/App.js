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
  if (localStorage['cardsIHave']) exampleCards = JSON.parse(localStorage['cardsIHave'])[collectionName];
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

  function handleCollectionChange(coll, collName) {
    setCollectionName(collName);
    setCollection(coll);
  }


  async function asyncUpdateCardsIHave() {
    /*Get all the cards in the set, then get all the cards the user has from within that set, saved in localStorage*/
    await getCards(collection);
    if (JSON.parse(localStorage['cardsIHave'])[collectionName]) {
      setCardsIHave(JSON.parse(localStorage['cardsIHave'])[collectionName]);
    } else {
      setCardsIHave([]);
    }
  }


  useEffect(() => {
    getSets();
  }, [collections.length]);

  useEffect(() => {
    asyncUpdateCardsIHave();
  }, [collection])
  
  useEffect(() => {
    setCount(cardsIHave.length);
  }, [cardsIHave.length]); 

  return (
    <div className="App">
      <Collections collections={collections} handleChange={(coll, collName) => handleCollectionChange(coll, collName)}/>
      {cards.length > 0 ? <Collection setCount={setCount} data={{collection: collectionName, cards, count, cardsIHave}} /> : null}
    </div>
  );
}

export default App;
