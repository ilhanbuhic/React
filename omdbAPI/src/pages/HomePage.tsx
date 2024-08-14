import { Hero } from '../components/Hero/Hero'
import HomePageCarousel from '../components/HomePage-Carousel/HomePage-Carousel'
import OfferOne from '../components/WhatDoWeOffer/Offer_1/OfferOne'
import { OfferTwo } from '../components/WhatDoWeOffer/Offer_2/OfferTwo'
import { OfferThree } from '../components/WhatDoWeOffer/Offer_3/OfferThree'
import { OfferFour } from '../components/WhatDoWeOffer/Offer_4/OfferFour'

function HomePage() {
  return (
    <div>
      <Hero />
      <HomePageCarousel />
      <OfferOne />
      <OfferTwo />
      <OfferThree />
      <OfferFour />
    </div>
  )
}

export default HomePage
