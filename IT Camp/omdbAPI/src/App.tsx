import Navbar from './Navbar/Navbar'
import './Navbar/Navbar.scss'
import './components/HomePage-Carousel/HomePage-Carousel'
import HomePageCarousel from './components/HomePage-Carousel/HomePage-Carousel'
import { OfferOne } from './components/WhatDoWeOffer/Offer_1/OfferOne'
import { OfferTwo } from './components/WhatDoWeOffer/Offer_2/OfferTwo'
import { OfferThree } from './components/WhatDoWeOffer/Offer_3/OfferThree'
import { OfferFour } from './components/WhatDoWeOffer/Offer_4/OfferFour'

function App() {
  return (
    <div className='App bg-primary'>
      {/* w-full h-auto bg-cover bg-center */}
      {/* <header className='App-header'> */}
      <Navbar />
      {/* </header> */}
      <HomePageCarousel />
      <OfferOne />
      <OfferTwo />
      <OfferThree />
      <OfferFour />

      {/* <WhatDoWeOffer /> */}
    </div>
  )
}

export default App
