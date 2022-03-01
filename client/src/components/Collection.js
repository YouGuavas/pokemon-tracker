
import '../styles/Collection.scss';
import {useState} from 'react';
import Card from './Card';


export default function Collection(props) {
  const [cardsIHave, setCardsIHave] = useState(props.data.cardsIHave);

  const count = props.data.count;
  const collection = props.data.collection;
  const cardsInCollection = props.data.cards;

  const addToCollection = (card) => {
    cardsIHave.push(card);
    setCardsIHave(cardsIHave.sort((a,b) => a-b));
  };
  const removeFromCollection = (card) => {
    const ind = cardsIHave.indexOf(card);
    cardsIHave.splice(ind, 1);
    setCardsIHave(cardsIHave);
  }

  const saveCards = (cards) => {
    if (localStorage['cardsIHave']) {
      const myCards = JSON.parse(localStorage['cardsIHave']);
      myCards[collection] = cards;
      localStorage.setItem('cardsIHave', JSON.stringify(myCards));
    } else {
      localStorage.setItem('cardsIHave', JSON.stringify({[collection]: cards}));
    }    
  }
  return(
    <div className="collection">
      <h1>{collection}</h1>
      <h2>{count}/{cardsInCollection.length} cards - {(100*(count/cardsInCollection.length)).toFixed(2)}% complete</h2>
      <button className="submit-button" onClick={() => saveCards(cardsIHave)}>Submit</button>
      <div className="grid">
      {cardsInCollection.map((item, index) => {
        const have = cardsIHave.indexOf(index) !== -1;
        return(
        <div key={index} className='item'>
          <Card data={{item, have:have}} checked={have} addToCollection={addToCollection} removeFromCollection={removeFromCollection} count={count} total={cardsInCollection.length} handleCount={props.setCount} index={index} src='https://www.popsockets.com/dw/image/v2/BFSM_PRD/on/demandware.static/-/Sites-popsockets-master-catalog/default/dw9eb9511a/images/hi-res/Poke-Ball-Gloss_01_Top-View.png?sw=800&sh=800' />
        </div>
        )
      })}
      </div>
    </div>
  )
}