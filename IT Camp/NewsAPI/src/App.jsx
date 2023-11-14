import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import News from './components/News/News'

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Banner />
      <News />
    </div>
  )
}

export default App
