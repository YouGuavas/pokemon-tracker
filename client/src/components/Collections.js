import '../styles/Collections.scss';

export default function Collections(props) {
  const collections = [{name:'Chilling Reign', id:'CRE-Chilling-Reign'}, {name: 'Evolving Skies', id: 'SWSH7-Evolving-Skies'}]
  function handleChange(event) {
    const target = JSON.parse(event.target.value);
    const collectionId = target.id;
    const collectionName = target.name;
    props.handleChange(collectionId, collectionName);
  }
  
  return (
    <div>

      <select onChange={handleChange}>
        {collections.map((item, index) => (
        <option key={index} value={JSON.stringify(item)}>
          {item.name}
        </option>
        ))}
      </select>

    </div>
  )
}