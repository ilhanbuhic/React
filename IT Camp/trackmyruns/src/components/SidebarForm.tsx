import React, { useState } from 'react'
import { SidebarFormProp } from '../utils/interface'

// const [hidden, setHidden] = useState<string>('none')

export const SidebarForm: React.FC<SidebarFormProp> = ({
  classNameInputExtender,
  labelName,
  inputPlaceholder,
}) => {
  return (
    <>
      <div className={`form__row`}>
        <label className={`form__label`}>{labelName}</label>
        <input
          className={`form_input form_input--${classNameInputExtender}`}
          placeholder={inputPlaceholder}
        />
      </div>
    </>
  )
}
