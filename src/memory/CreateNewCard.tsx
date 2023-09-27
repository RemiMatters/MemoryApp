import React from 'react'

import Input from '../uikit/Input'
import Btn from '../uikit/Btn'

import * as UI from './ui.styles'
import { ICreateNewCardProps } from './types'

const CreateNewCard = (props: ICreateNewCardProps) => {
  const { value, setValue, onCreate } = props

  return (
    <UI.Wrapper style={{ minWidth: '100%' }}>
        <UI.Title>Создать свою карточку</UI.Title>
        <div style={{ width: 350 }}>
          <Input value={value} onChange={setValue} />
        </div>
        <Btn
          disabled={!value.trim()}
          onClick={() => {
            onCreate(value.trim())
            setValue('')
          }}
        >
          Создать новую
        </Btn>
      </UI.Wrapper>
  )
}

export default CreateNewCard
