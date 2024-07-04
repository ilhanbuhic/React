import React, { useEffect, useRef, useState } from 'react'
import { SidebarFormProp } from '../utils/interface'

// const [hidden, setHidden] = useState<string>('none')

export const SidebarForm: React.FC<SidebarFormProp> = ({
  classNameInputExtender,
  labelName,
  inputPlaceholder,
  isInputFocus,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  useEffect(() => {
    if (isInputFocus) focus()
  }, [isInputFocus])

  return (
    <>
      <div className={`form__row`}>
        <label className={`form__label`}>{labelName}</label>
        <input
          name={labelName}
          ref={inputRef}
          className={`form__input form_input--${classNameInputExtender}`}
          placeholder={inputPlaceholder}
        />
      </div>
    </>
  )
}
