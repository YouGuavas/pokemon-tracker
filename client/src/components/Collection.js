
import '../styles/Collection.scss';
import { useState } from 'react';


import Card from './Card';


export default function Collection(props) {
  const cardsIHave = props.data.cardsIHave;

  const count = props.data.count;
  const collection = props.data.collection;
  const cards = props.data.cards;

  const addToCollection = (card) => {
    cardsIHave.push(card);
    props.setCardsIHave(cardsIHave.sort((a,b) => a-b));
  };
  const removeFromCollection = (card) => {
    const ind = cardsIHave.indexOf(card);
    cardsIHave.splice(ind, 1);
    props.setCardsIHave(cardsIHave);
  }
  return(
    <div className="collection">
      <h1>{collection}</h1>
      <h2>{count}/{cards.length} cards - {(100*(count/cards.length)).toFixed(2)}% complete</h2>
      <button className="submit-button">Submit</button>
      <div className="grid">
      {cards.map((item, index) => {
        return(
        <div key={index} className='item'>
                  {cardsIHave.indexOf(index) != -1 ? 
                  <Card data={{item, have:true}} addToCollection={addToCollection} removeFromCollection={removeFromCollection} count={count} total={cards.length} handleCount={props.setCount} index={index} src='https://www.popsockets.com/dw/image/v2/BFSM_PRD/on/demandware.static/-/Sites-popsockets-master-catalog/default/dw9eb9511a/images/hi-res/Poke-Ball-Gloss_01_Top-View.png?sw=800&sh=800' />
                  :
                  <Card data={{item, have:false}} addToCollection={addToCollection} removeFromCollection={removeFromCollection} count={count} total={cards.length} handleCount={props.setCount} index={index} src='https://www.popsockets.com/dw/image/v2/BFSM_PRD/on/demandware.static/-/Sites-popsockets-master-catalog/default/dw9eb9511a/images/hi-res/Poke-Ball-Gloss_01_Top-View.png?sw=800&sh=800' />
        }
        </div>
        )
      })}
      </div>
    </div>
  )
}