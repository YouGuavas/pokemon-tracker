import './Card.scss';

export default function Card(props) {
  return(
    <div className="card">
      <div className="card-inner">
        {/*Create the front of the card*/}
        <div className="card-front">
          <img className="card-img" src={props.src} />
        </div>

        {/*Create the back of the card*/}
        <div className="card-back">

        </div>
      </div>
    </div>
  )
}