import '../styles/Card.scss';

export default function Card(props) {
  const handleCheck = (index) => {
    document.getElementById(index).classList.toggle('greyed');

  }
  const checkBoxName = `Card${props.index}`;
  return(
    <div className="card-mat" key={props.index}>
      <div className="card">
      
        <div className="card-inner">
          {/*Create the front of the card*/}
          <div className={props.data.have ? "poke-front" : "card-front"}>
            {props.data.have ? <img className="back-img" id={props.index} src={props.data.src} /> : <img className="front-img" src={props.src} />}
          </div>

          {/*Create the back of the card*/}

          <div className={props.data.have ? "poke-back" : "card-back"}>
            {props.data.have ? <img className="front-img" src={props.src} /> : <img className="back-img greyed" id={props.index} src={props.data.src} />}

          </div>
          </div>
      </div>
      <form className="card-plaque"><input className="checkbox" type="checkbox" name={checkBoxName} id={checkBoxName} onClick={() => handleCheck(props.index)}/><label for={checkBoxName}>{props.data.name}</label></form>
    </div>
  )
}