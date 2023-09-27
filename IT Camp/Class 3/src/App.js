import './App.css';
import Item from './components/Item'

const products = [
  { name: 'Cips', isBought: true},
  { name: 'Kola', isBought: false},
  { name: 'Protein', isBought: true},
  { name: 'Vitamin', isBought: false}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Stvari za kupovinu</p>
        <ul>
          {/* Ovo je los primer */}
          {/* <Item name = 'Cips' isBought={true} />
          <Item name = 'Kola' />
          <Item name = 'Protein' />
          <Item name = 'Vitamin' /> */}
          {products.map((el, index) => (
            <Item key = {index} name = {el.name} isBought={el.isBought} />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
