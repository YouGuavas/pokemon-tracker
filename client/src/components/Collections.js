import '../styles/Collections.scss';

export default function Collections(props) {
  const collections = [{name:'Chilling Reign', id:'CRE-Chilling-Reign'}, {name: 'Evolving Skies', id: 'SWSH7-Evolving-Skies'}]
  function handleChange(event) {
    props.handleChange(event.target.value);
  }
  
  return (
    <div>

      <select onChange={handleChange}>
        {collections.map((item, index) => (
        <option key={index} value={item.id}>
          {item.name}
        </option>
        ))}
      </select>

    </div>
  )
}