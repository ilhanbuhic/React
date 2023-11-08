import Navbar from './Navbar/Navbar'
import './Navbar/Navbar.scss'
import './HomePage-Carousel/HomePage-Carousel'
import HomePageCarousel from './HomePage-Carousel/HomePage-Carousel'
import { WhatDoWeOffer } from './WhatDoWeOffer/WhatDoWeOffer'

// import { Hero } from './Hero/Hero'

function App() {
  return (
    <div className='App bg-primary'> 
    {/* w-full h-auto bg-cover bg-center */}
      {/* <header className='App-header'> */}
        <Navbar />
      {/* </header> */}
      <HomePageCarousel />
      <WhatDoWeOffer />
    </div>
  )
}

export default App
