import React from 'react'
import Offer from '../Offer'
import './OfferTwo.scss'

export const OfferTwo = () => {
  return (
    <Offer
      title='Download your shows to watch offline'
      description='Save your favorites easily and always have something to watch.'
      imageUrl='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
      alt='/'
      classNamesContainer='offer_2-container'
      classNameOffer='offer_2'
      classNameOfferContent='offer_2-content'
      classNameOfferImg='offer_2-img'
      classNameBgImg='background-image-offer_2'
      classNameOverLayVid='overlay-video-offer_2'
    />
  )
}
