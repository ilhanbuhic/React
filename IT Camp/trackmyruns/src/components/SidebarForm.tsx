import React, { useState } from 'react'
import { SidebarFormProp } from '../utils/interface'

// const [hidden, setHidden] = useState<string>('none')

export const SidebarForm: React.FC<SidebarFormProp> = ({
  className,
  labelName,
  inputPlaceholder,
}) => {
  return (
    <>
      <div className={`form__row ${className}`}>
        <label className={`form__label`}>{labelName}</label>
        <input
          className={`form__input form__input--${className}`}
          placeholder={inputPlaceholder}
        />
      </div>
    </>
  )
}
