import React from 'react'

import * as UI from './ui.styles'
import { IProps } from './types'

const Btn = (props: IProps) => {
  const { children, disabled, onClick } = props

  return (
    <UI.Btn
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </UI.Btn>
  )
}

export default Btn
