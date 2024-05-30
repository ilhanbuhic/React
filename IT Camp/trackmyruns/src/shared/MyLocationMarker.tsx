import React from 'react'
import ReactDOMServer from 'react-dom/server'

const SpinnerIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='80'
    height='80'
    viewBox='0 0 80 80'
  >
    <style>
      {`
        .lds-ripple div {
          position: absolute;
          border: 4px solid currentColor;
          opacity: 1;
          border-radius: 50%;
          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        .lds-ripple div:nth-child(2) {
          animation-delay: -0.5s;
        }
        @keyframes lds-ripple {
          0% {
            top: 36px;
            left: 36px;
            width: 8px;
            height: 8px;
            opacity: 0;
          }
          4.9% {
            top: 36px;
            left: 36px;
            width: 8px;
            height: 8px;
            opacity: 0;
          }
          5% {
            top: 36px;
            left: 36px;
            width: 8px;
            height: 8px;
            opacity: 1;
          }
          100% {
            top: 0;
            left: 0;
            width: 80px;
            height: 80px;
            opacity: 0;
          }
        }
      `}
    </style>
    <div></div>
    <div></div>
  </svg>
)

export const SpinnerIconString = encodeURIComponent(
  ReactDOMServer.renderToString(<SpinnerIcon />)
)

// Now you can use SpinnerIconString as the iconUrl for your Leaflet marker
