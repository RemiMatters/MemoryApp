import React, { useRef } from 'react'

import * as UI from './ui.styles'
import { IProps } from './types'

const Input = (props: IProps) => {
  const { value, onChange } = props

  const ref = useRef<HTMLInputElement>(null)

  return (
    <UI.Wrapper
      onClick={() => {
        if (ref.current) {
          ref.current.focus()
        }
      }}
    >
      <UI.Input
        ref={ref}
        value={value}
        onChange={(evt) => {
          onChange(evt.target.value)
        }}
      />
    </UI.Wrapper>
  )
}

export default Input
