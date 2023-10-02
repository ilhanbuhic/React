import './App.css'
// import './components/Class-1/Practice 4/practice-4.css'
// import './components/Class-2/Practice 1/practice-1.css'

// import Form1 from './components/Class-1/Practice 1/practice-1'
// import AddingNumber from "./components/Class-1/Practice 2/practice-2";
// import MeSetter from "./components/Class-1/Practice 3/practice-3";
// import BlogMaker from './components/Class-1/Practice 4/practice-4'
// import AboutMeForm from './components/Class-2/Practice 1/practice-1'
import Item from './components/Class-3/Practice 1/Item'

const products = [
  { name: 'Cips', isBought: true },
  { name: 'Kola', isBought: false },
  { name: 'Protein', isBought: true },
  { name: 'Vitamin', isBought: false },
]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <Form1 /> */}
        {/* <AddingNumber /> */}
        {/* <MeSetter /> */}
        {/* <BlogMaker /> */}
        {/* <AboutMeForm /> */}
        <div className='App'>
          <header className='App-header'>
            <p>Groceries</p>
            <ul>
              {/* Bad example */}
              {/* <Item name='Cips' isBought={true} />
              <Item name='Kola' />
              <Item name='Protein' />
              <Item name='Vitamin' /> */}
              {/* Bad example */}

              {/* Good examole */}
              {products.map((el, index) => (
                <Item key={index} name={el.name} isBought={el.isBought} />
              ))}
              {/* Good examole */}
            </ul>
          </header>
        </div>
      </header>
    </div>
  )
}

export default App
