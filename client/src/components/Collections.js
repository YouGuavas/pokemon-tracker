import '../styles/Collections.scss';

export default function Collections() {
  const collections = ['Chilling Reign', 'Evolving Skies']
  return (
    <div>

      <select>
        {collections.map((item, index) => (<option key={index}>{item}</option>))}
      </select>

    </div>
  )
}