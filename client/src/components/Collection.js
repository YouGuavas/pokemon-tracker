
import '../styles/Collection.scss';
import { useState } from 'react';


import Card from './Card';


export default function Collection(props) {

  const [count, setCount] = useState(props.data.count);
  const collection = props.data.collection;
  const cards = props.data.cards;
  let have = false;
  return(
    <div className="collection">
      <h1>{collection}</h1>
      <h2>{count}/{cards.length} cards - {(count/cards.length).toFixed(4)*100}% complete</h2>
      <div className="grid">
      {cards.map((item, index) => {
        return(
        <div key={index} className='item'>
          <Card data={{item, have}} count={count} handleCount={setCount} index={index} src='https://www.popsockets.com/dw/image/v2/BFSM_PRD/on/demandware.static/-/Sites-popsockets-master-catalog/default/dw9eb9511a/images/hi-res/Poke-Ball-Gloss_01_Top-View.png?sw=800&sh=800' />
        </div>
        )
      })}
      </div>
    </div>
  )
}