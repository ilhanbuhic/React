import Navbar from './Navbar/Navbar'
import './Navbar/Navbar.scss'
import './HomePage-Carousel/HomePage-Carousel'
import HomePageCarousel from './HomePage-Carousel/HomePage-Carousel'

function App() {
  return (
    <div className='App w-full h-screen bg-cover bg-center'>
      <header className='App-header'>
        <Navbar />
      </header>
      <HomePageCarousel />
    </div>
  )
}

export default App
