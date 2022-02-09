import './styles/App.scss';
import Collections from './components/Collections';
import Collection from './components/Collection';

import { getCardsFromSet } from './utilities/api';
import React, {useEffect, useState} from 'react';



function App() {
  const [cards, setCards] = useState([]);
  const [collection, setCollection] = useState('CRE-Chilling-Reign');
  const count = 0;
  async function getCards(coll) {
    const cardList = await getCardsFromSet(coll);
    setCards(cardList);
  }

  function handleCollectionChange(coll) {
    setCollection(coll);
  }

  useEffect(() => {
    getCards(collection);
  }, [collection]); 
  return (
    <div className="App">
      <Collections handleChange={(coll) => handleCollectionChange(coll)}/>
      <Collection collection="Chilling Reign" data={{collection: 'Chilling Reign', cards, count}} />
    </div>
  );
}

export default App;
