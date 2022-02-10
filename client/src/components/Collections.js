import '../styles/Collections.scss';

export default function Collections(props) {
  const collections = props.collections;
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