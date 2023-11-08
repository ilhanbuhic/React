import React from 'react'
import { Offer_1 } from './Offer_1/Offer_1'
import { Offer_2 } from './Offer_2/Offer_2'

export const WhatDoWeOffer = () => {
  return (
    <div className='WhatDoWeOffer-container bg-secondary'>
      <div className="WhatDoWeOffer">
        <Offer_1 />
        <Offer_2 />
      </div>
    </div>
  )
}
