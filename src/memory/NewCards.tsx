import React from 'react'

import Card from '../uikit/Card'
import Btn from '../uikit/Btn'

import * as UI from './ui.styles'
import { INewCardsProps } from './types'

const NewCards = (props: INewCardsProps) => {
  const { cards } = props

  if (!cards.length) {
    return null
  }

  return (
    <UI.Wrapper>
      <UI.Title>Новые карточки</UI.Title>
      <Btn
        onClick={() => {
          navigator.clipboard.writeText(JSON.stringify(cards))
        }}
      >
        Копировать карточки
      </Btn>
      {cards.map((newCard) => {
        return (
          <Card
            key={newCard.key}
            question={newCard.key}
            answer={newCard.value}
          />
        )
      })}
    </UI.Wrapper>
  )
}

export default NewCards
