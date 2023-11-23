import React from 'react'
import './OfferThree.scss'

export const OfferThree = () => {
  return (
    <div className='offer_3-container bg-secondary'>
      <div className='offer_3'>
        <div className='offer_3-content'>
          <h3>Enjoy on your TV</h3>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className='offer_3-img'>
          <img
            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
            alt='dsadsadsa'
            className='background-image-offerThree'
          />
          <video
            data-uia='nmhp-card-animation-asset-video'
            autoPlay
            playsInline
            muted
            loop
            className='overlay-video-offerThree'
          >
            <source
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
              type='video/mp4'
            />
          </video>
        </div>
      </div>
    </div>
  )
}
