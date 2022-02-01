import '../styles/Collections.scss';

export default function Collections() {
  const collections = ['Chilling Reign', 'Evolving Skies']
  return (
    <div>

      <select>
        {collections.map((item) => (<option>{item}</option>))}
      </select>

    </div>
  )
}