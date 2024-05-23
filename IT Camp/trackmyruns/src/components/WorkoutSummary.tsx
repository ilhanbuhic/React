import React from 'react'
import { WorkoutSummaryProp } from '../utils/interface'

export const WorkoutSummary: React.FC<WorkoutSummaryProp> = ({
  workoutClassNameExtender,
  dataID,
  workoutTitle,
  workoutDetails,
}) => {
  return (
    <li
      className={`workout workout--${workoutClassNameExtender}`}
      data-id={`${dataID}`}
    >
      <h2 className='workout__title'>{workoutTitle}</h2>
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
  )
}
