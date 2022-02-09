import '../styles/Collections.scss';

export default function Collections(props) {
  const collections = ['Chilling Reign', 'Evolving Skies']
  console.log(props);
  return (
    <div>

      <select>
        {collections.map((item, index) => (<option key={index}>{item}</option>))}
      </select>

    </div>
  )
}