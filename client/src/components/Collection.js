import '../styles/Collection.scss';

import Card from './Card';

export default function Collection(props) {
  const cards = ['Grookey', 'Thwackey', 'Rillaboom', '', '', ''];
  return(
    <div className="collection">
      <h1>{props.collection}</h1>
      <div className="grid">
      {cards.map((item, index) => {
        return(
        <div key={index} className='item'>
          <Card item={item} src='https://www.popsockets.com/dw/image/v2/BFSM_PRD/on/demandware.static/-/Sites-popsockets-master-catalog/default/dw9eb9511a/images/hi-res/Poke-Ball-Gloss_01_Top-View.png?sw=800&sh=800' />
        </div>
        )
      })}
      </div>
    </div>
  )
}