import '../styles/Card.scss';
import { useState } from 'react';


export default function Card(props) {

  const [pokeSrc, setPokeSrc] = useState(props.data.item.src);
  const [have, setHave] = useState(props.data.have);


  const handleCheck = (index) => {
    const thisCard = document.getElementById(index);
    const altCard = document.getElementById(`${index}-alt`);
    thisCard.classList.toggle('greyed');
    if (have) {
      setHave(false);
      props.handleCount(props.count-1);

    } else {
      setHave(true);
      props.handleCount(props.count+1);
    }
  }
  const checkBoxName = `Card${props.index}`;
  console.log(props.data);
  return(
    <div className="card-mat" key={props.index}>
      <div className="card">
      
        <div className="card-inner">
          {/*Create the front of the card*/}
          <div className={have ? "poke-front" : "card-front"}>
            {have ? <img className="back-img" id={props.index} src={pokeSrc} /> : <img className="front-img" src={props.src} id={`${props.index}-alt`}/>}
          </div>

          {/*Create the back of the card*/}

          <div className={have ? "poke-back" : "card-back"}>
            {have ? <img className="front-img" src={props.src} id={`${props.index}-alt`} /> : <img className="back-img greyed" id={props.index} src={props.data.item.src} />}

          </div>
          </div>
      </div>
      <form className="card-plaque">
        <div className="label-wrapper">
          <input className="checkbox" type="checkbox" name={checkBoxName} id={checkBoxName} onChange={() => handleCheck(props.index)}/>
          <label for={checkBoxName}>{props.data.item.name}</label>
        </div>
      </form>
    </div>
  )
}