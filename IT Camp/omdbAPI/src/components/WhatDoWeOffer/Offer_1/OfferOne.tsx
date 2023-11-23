import React from 'react'
import './OfferOne.scss'

export const OfferOne = () => {
  return (
    <div className='offer_1-container bg-secondary'>
      <div className='offer_1'>
        <div className='offer_1-content'>
          <h3>Enjoy on your TV</h3>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className='offer_1-img'>
          <img
            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
            alt='dsadsadsa'
            className='background-image-offerOne'
          />
          <video
            data-uia='nmhp-card-animation-asset-video'
            autoPlay
            playsInline
            muted
            loop
            className='overlay-video-offerOne'
          >
            <source
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
              type='video/mp4'
            />
          </video>
        </div>
      </div>
    </div>
  )
}
