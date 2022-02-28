import '../styles/Card.scss';
import { useState } from 'react';


export default function Card(props) {
  const [have, setHave] = useState(props.data.have);

  const handleCheck = (index) => {
    const thisCard = document.getElementById(index);
    thisCard.classList.toggle('greyed');
    if (have) {
      setHave(false);
      props.removeFromCollection(index);
      const newCount = props.count - 1;
      if (newCount >= 0) props.handleCount(newCount);
      /*if unchecking a card that you previously owned/checked, 
      decrement total count and re-flip that card*/

    } else {
      setHave(true);
      props.addToCollection(index);
      const newCount = props.count + 1;
      if (newCount <= props.total) props.handleCount(newCount);
      /*if checking a card that you previously did not own/check, 
      increment total count and flip that card*/
    }
  }
  const checkBoxName = `Card${props.index}`;
  return(
    <div className="" key={props.index}>
      <div className="card">
        <div className="card-inner">
          {/*Create the front of the card*/}
          <div className={have ? "poke-front" : "card-front"}>
            {have ? <img className="back-img" id={props.index} src={props.data.item.src} /> : <img className="front-img" src={props.src} id={`${props.index}-alt`}/>}
          </div>

          {/*Create the back of the card*/}

          <div className={have ? "poke-back" : "card-back"}>
            {have ? <img className="front-img" src={props.src} id={`${props.index}-alt`} /> : <img className="back-img greyed" id={props.index} src={props.data.item.src} />}

          </div>
          
        </div>
        <div className="card-plaque">
        <div className="label-wrapper">
          <input className="checkbox" type="checkbox" defaultChecked={props.checked} name={checkBoxName} id={checkBoxName} onChange={() => handleCheck(props.index)}/>
          <label for={checkBoxName}>{props.data.item.name}</label>
        </div>
      </div>
      </div>
    </div>
  )
}