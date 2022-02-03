import '../styles/Card.scss';

export default function Card(props) {
  return(
    <div className="card">
      <div className="card-inner">
        {/*Create the front of the card*/}
        <div className="card-front">
          <img className="front-img" src={props.src} />
        </div>

        {/*Create the back of the card*/}
        <div className="card-back">

          <img className="back-img" src="https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH6/SWSH6_EN_16.png" />
          

        </div>
      </div>
    </div>
  )
}