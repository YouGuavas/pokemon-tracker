import '../styles/Card.scss';

export default function Card(props) {
  const handleCheck = (index) => {
    document.getElementById(index).classList.toggle('greyed');

  }
  return(
    <div className="card-mat" key={props.index}>
      <div className="card">
      
        <div className="card-inner">
          {/*Create the front of the card*/}
          <div className="card-front">
            <img className="front-img" src={props.src} />
          </div>

          {/*Create the back of the card*/}

          <div className="card-back">
            {props.data.have ? <img className="back-img" id={props.index} src={props.data.src} /> : <img className="back-img greyed" id={props.index} src={props.data.src} />}

          </div>
          </div>
      </div>
      <p className="card-plaque"><span><input className="checkbox" type="checkbox" onClick={() => handleCheck(props.index)}/></span>{props.data.name}</p>
    </div>
  )
}