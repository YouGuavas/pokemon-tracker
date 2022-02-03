import '../styles/Collection.scss';

import Card from './Card';

import { getCardsFromSet } from '../utilities/api';

export default function Collection(props) {
  const cards = getCardsFromSet();
  const count = 9;
  return(
    <div className="collection">
      <h1>{props.collection}</h1>
      <h2>{count}/{cards.length} cards - {(count/cards.length)*100}% complete</h2>
      <div className="grid">
      {cards.map((item, index) => {
        return(
        <div key={index} className='item'>
          <Card data={item} index={index} src='https://www.popsockets.com/dw/image/v2/BFSM_PRD/on/demandware.static/-/Sites-popsockets-master-catalog/default/dw9eb9511a/images/hi-res/Poke-Ball-Gloss_01_Top-View.png?sw=800&sh=800' />
        </div>
        )
      })}
      </div>
    </div>
  )
}