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
          <Card item={item} />
        </div>
        )
      })}
    </div>
  )
}