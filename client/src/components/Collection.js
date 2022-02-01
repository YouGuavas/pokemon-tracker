import '../styles/Collection.scss';

import Card from './Card';

export default function Collection(props) {
  const cards = ['Grookey', 'Thwackey', 'Rillaboom'];
  return(
    <div className="collection grid">
      {props.collection}
      {cards.map((item, index) => {
        const gridRow = 1;
        const gridColumn = index+1;
        return(
        <div key={index} className='item'>
          <Card item={item} src='https://www.popsockets.com/dw/image/v2/BFSM_PRD/on/demandware.static/-/Sites-popsockets-master-catalog/default/dw9eb9511a/images/hi-res/Poke-Ball-Gloss_01_Top-View.png?sw=800&sh=800' />
        </div>
        )
      })}
    </div>
  )
}