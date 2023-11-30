import React from 'react'
import Offer from '../Offer'
import './OfferThree.scss'

export const OfferThree = () => {
  return (
    <Offer
      title='Enjoy on your TV'
      description=' Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
      //         players, and more.'
      imageUrl='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
      videoUrl='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
      alt='/'
      classNamesContainer='offer_3-container'
      classNameOffer='offer_3'
      classNameOfferContent='offer_3-content'
      classNameOfferImg='offer_3-img'
      classNameBgImg='background-image-offer_3'
      classNameOverLayVid='overlay-video-offer_3'
    />
  )
}
``