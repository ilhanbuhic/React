import React from 'react'
import './OfferOne.scss'
import Offer from '../Offer'

const OfferOne: React.FC = () => {
  return (
    <Offer
      title='Enjoy on your TV'
      description='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
      imageUrl='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
      videoUrl='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
      alt='/'
      classNamesContainer='offer_1-container'
      classNameOffer='offer_1'
      classNameOfferContent='offer_1-content'
      classNameOfferImg='offer_1-img'
      classNameBgImg='background-image-offer_1'
      classNameOverLayVid='overlay-video-offer_1'
    />
  )
}

export default OfferOne
