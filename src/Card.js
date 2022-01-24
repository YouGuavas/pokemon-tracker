import './Card.scss';

export default function Card() {
  return(
    <div className="card">
      <div className="card-inner">
        {/*Create the front of the card*/}
        <div className="card-front">
          <img className="card-img" src="https://www.popsockets.com/dw/image/v2/BFSM_PRD/on/demandware.static/-/Sites-popsockets-master-catalog/default/dw9eb9511a/images/hi-res/Poke-Ball-Gloss_01_Top-View.png?sw=800&sh=800" />
        </div>

        {/*Create the back of the card*/}
        <div className="card-back">

        </div>
      </div>
    </div>
  )
}