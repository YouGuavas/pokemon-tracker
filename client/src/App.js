import './styles/App.scss';
import Collections from './components/Collections';
import Collection from './components/Collection';

import { getCardsFromSet } from './utilities/api';
import React, {useEffect, useState} from 'react';



function App() {
  const [cards, setCards] = useState([]);
  const count = 35;
  async function getCards() {
    const cardList = await getCardsFromSet('CRE-Chilling-Reign');

      setCards(cardList);
  }
  return (
    <div className="App" onClick={() => getCards()}>
      <Collections handleClick={() => getCards()}/>
      <Collection collection="Chilling Reign" data={{collection: 'Chilling Reign', cards, count}} />
    </div>
  );
}

export default App;
