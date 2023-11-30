// Offer.tsx
import React from 'react'

type offerNumber = '1' | '2' | '3' | '4'

interface OfferClassNames {
  container: `offer_${offerNumber}-container`
  offer: `offer_${offerNumber}`
  offerContent: `offer_${offerNumber}-content`
  offerImg: `offer_${offerNumber}-img`
  bgImg: `background-image-offer_${offerNumber}`
  overlayVid: `overlay-video-offer_${offerNumber}`
}

interface OfferProps {
  title: string
  description: string
  imageUrl: string
  alt: string
  videoUrl?: string // Make videoUrl optional
  classNamesContainer?: OfferClassNames['container']
  classNameOffer?: OfferClassNames['offer']
  classNameOfferContent?: OfferClassNames['offerContent']
  classNameOfferImg?: OfferClassNames['offerImg']
  classNameBgImg?: OfferClassNames['bgImg']
  classNameOverLayVid?: OfferClassNames['overlayVid']
}

const Offer: React.FC<OfferProps> = ({
  title,
  description,
  imageUrl,
  videoUrl,
  alt,
  classNamesContainer,
  classNameOffer,
  classNameOfferContent,
  classNameOfferImg,
  classNameBgImg,
  classNameOverLayVid,
}) => {
  return (
    <div className={`${classNamesContainer} bg-secondary`}>
      <div className={classNameOffer}>
        <div className={classNameOfferContent}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className={classNameOfferImg}>
          <img src={imageUrl} alt={alt} className={classNameBgImg} />
          <video
            data-uia='nmhp-card-animation-asset-video'
            autoPlay
            playsInline
            muted
            loop
            className={classNameOverLayVid}
          >
            <source src={videoUrl} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Offer
