import Navbar from './Navbar/Navbar'
import './Navbar/Navbar.scss'
import './HomePage-Carousel/HomePage-Carousel'
import HomePageCarousel from './HomePage-Carousel/HomePage-Carousel'
// import { WhatDoWeOffer } from './WhatDoWeOffer/WhatDoWeOffer'
import { Offer_1 } from './WhatDoWeOffer/Offer_1/Offer_1'
import { Offer_2 } from './WhatDoWeOffer/Offer_2/Offer_2'
import { Offer_3 } from './WhatDoWeOffer/Offer_3/Offer_3'
import { Offer_4 } from './WhatDoWeOffer/Offer_4/Offer_4'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  return (
    <div className='App bg-primary'>
      {/* w-full h-auto bg-cover bg-center */}
      {/* <header className='App-header'> */}
      <Navbar />
      {/* </header> */}
      <HomePageCarousel />
      <Offer_1 />
      <Offer_2 />
      <Offer_3 />
      <Offer_4 />

      {/* <WhatDoWeOffer /> */}
    </div>
  )
}

export default App
