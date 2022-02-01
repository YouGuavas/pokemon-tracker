import './styles/App.scss';
import Collections from './components/Collections';
import Collection from './components/Collection';

function App() {
  return (
    <div className="App">
      <Collections />
      <Collection collection="Chilling Reign" />
    </div>
  );
}

export default App;