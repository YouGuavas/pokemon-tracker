import '../styles/Card.scss';


export default function Card(props) {
  let have = props.data.have;
  const handleCheck = (index) => {
    const thisCard = document.getElementById(index);
    thisCard.classList.toggle('greyed');
    if (have) {
      have = false;
      props.removeFromCollection(index);
      const newCount = props.count - 1;
      if (newCount >= 0) props.handleCount(newCount);
      /*if unchecking a card that you previously owned/checked, 
      decrement total count and re-flip that card*/

    } else {
      have = true;
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
            <img className={have ? "back-img" : "front-img"} id={have ? props.index : `${props.index}-alt`} src={have ? props.data.item.src : props.src} />
          </div>

          {/*Create the back of the card*/}

          <div className={have ? "poke-back" : "card-back"}>
            <img className={have ? "front-img" : "back-img"} id={have ? `${props.index}-alt` : props.index} src={have ? props.src : props.data.item.src} />
          </div>
          
        </div>
        <div className="card-plaque">
        <div className="label-wrapper">
          <input className="checkbox" type="checkbox" checked={have} name={checkBoxName} id={checkBoxName} onChange={() => handleCheck(props.index)}/>
          <label htmlFor={checkBoxName}>{props.data.item.name}</label>
        </div>
      </div>
      </div>
    </div>
  )
}