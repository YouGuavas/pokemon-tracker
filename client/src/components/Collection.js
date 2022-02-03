import '../styles/Collection.scss';

import Card from './Card';

export default function Collection(props) {
  const cards = [
    {
      name:'Grookey',
      src: "https://den-cards.pokellector.com/320/Grookey.CRE.16.39020.thumb.png",
      have: false

  }, {
    name:'Thwackey',
    src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
    have: false

}, {
  name:'Rillaboom',
  src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
  have: false

},  {
  name:'Weedle',
  src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
  have: false

},  {
  name:'Kakuna',
  src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
  have: false

},  {
  name:'Beedrill',
  src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
  have: false

}, {
  name:'Grookey',
  src: "https://den-cards.pokellector.com/320/Grookey.CRE.16.39020.thumb.png",
  have: false

}, {
name:'Thwackey',
src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
have: false

}, {
name:'Rillaboom',
src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
have: false

},  {
name:'Weedle',
src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
have: false

},  {
name:'Kakuna',
src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
have: false

},  {
name:'Beedrill',
src: "https://den-cards.pokellector.com/320/Kakuna.CRE.2.39008.thumb.png",
have: false

}];
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