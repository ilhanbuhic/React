import React, { useEffect, useRef, useState } from 'react'
import { SidebarForm } from './SidebarForm'
import { logo } from '../assets/images/index'

const Sidebar: React.FC<{ isFormVisible: boolean }> = ({ isFormVisible }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  // const [activeCandence, setActiveCandence] = useState('')

  return (
    <div className='sidebar'>
      <img src={logo} alt='Logo' className='logo' />

      <ul className='workouts'>
        <form className={`form ${isFormVisible ? '' : 'hidden'}`}>
          <div className='form__row'>
            <label className='form__label'>Type</label>
            <select className='form__input form__input--type'>
              <option value='running'>Running</option>
              <option value='cycling'>Cycling</option>
            </select>
          </div>
          <SidebarForm
            classNameInputExtender='distance'
            labelName='Distance'
            inputPlaceholder='km'
            value={'...'}
            isInputFocus={isFormVisible}
          />
          {/* <div className='form__row'>
            <label className='form__label'>Distance</label>
            <input
            value={nekiStajte}
            onChange={(e) => setNekiStejt(e)}
              className='form__input form__input--distance'
              placeholder='km'
            />
          </div> */}
          <SidebarForm
            classNameInputExtender='duration'
            labelName='Duration'
            inputPlaceholder='min'
            value={'...'}
          />
          {/* <div className='form__row'>
            <label className='form__label'>Duration</label>
            <input
              className='form__input form__input--duration'
              placeholder='min'
            />
          </div> */}
          <SidebarForm
            classNameInputExtender='cadence'
            labelName='Cadence'
            inputPlaceholder='step/min'
            value={'...'}
          />
          {/* <div className='form__row'>
            <label className='form__label'>Cadence</label>
            <input
              className='form__input form__input--cadence'
              placeholder='step/min'
            />
          </div> */}
          {/* <SidebarForm
              classNameInputExtender='elevation'
              labelName='Elev Gain'
              inputPlaceholder='Elev Gain'
              value={'...'}
            /> */}
          {/* <div className='form__row form__row--hidden'>
            <label className='form__label'>Elev Gain</label>
            <input
              className='form__input form__input--elevation'
              placeholder='meters'
            />
          </div> */}
          <button className='form__btn'>OK</button>
        </form>

        <li className='workout workout--running' data-id='1234567890'>
          <h2 className='workout__title'>Running on April 14</h2>
          <div className='workout__details'>
            <span className='workout__icon'>🏃‍♂️</span>
            <span className='workout__value'>5.2</span>
            <span className='workout__unit'>km</span>
          </div>
          <div className='workout__details'>
            <span className='workout__icon'>⏱</span>
            <span className='workout__value'>24</span>
            <span className='workout__unit'>min</span>
          </div>
          <div className='workout__details'>
            <span className='workout__icon'>⚡️</span>
            <span className='workout__value'>4.6</span>
            <span className='workout__unit'>min/km</span>
          </div>
          <div className='workout__details'>
            <span className='workout__icon'>🦶🏼</span>
            <span className='workout__value'>178</span>
            <span className='workout__unit'>spm</span>
          </div>
        </li>

        <li className='workout workout--cycling' data-id='1234567891'>
          <h2 className='workout__title'>Cycling on April 5</h2>
          <div className='workout__details'>
            <span className='workout__icon'>🚴‍♀️</span>
            <span className='workout__value'>27</span>
            <span className='workout__unit'>km</span>
          </div>
          <div className='workout__details'>
            <span className='workout__icon'>⏱</span>
            <span className='workout__value'>95</span>
            <span className='workout__unit'>min</span>
          </div>
          <div className='workout__details'>
            <span className='workout__icon'>⚡️</span>
            <span className='workout__value'>16</span>
            <span className='workout__unit'>km/h</span>
          </div>
          <div className='workout__details'>
            <span className='workout__icon'>⛰</span>
            <span className='workout__value'>223</span>
            <span className='workout__unit'>m</span>
          </div>
        </li>
      </ul>

      <p className='copyright'>
        &copy; Copyright by
        <a
          className='twitter-link'
          target='_blank'
          href='https://twitter.com/jonasschmedtman'
        >
          &nbsp;Ilhan Buhic
        </a>
        . Use for learning or your portfolio. Don't use to teach. Don't claim as
        your own.
      </p>
    </div>
  )
}

export default Sidebar
