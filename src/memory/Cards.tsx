import React from 'react'

import Card from '../uikit/Card'

import cardsJson from '../stubs/cards.json'

import * as UI from './ui.styles'

const Cards = () => {
  return (
    <UI.CommonWrapper>
      {cardsJson.map((cardsCollection) => {
        return (
          <UI.Wrapper key={cardsCollection.title}>
            <UI.Title>{cardsCollection.title}</UI.Title>
            {cardsCollection.data.map((card) => {
              const { key, value } = card

              return <Card key={key} question={key} answer={value} />
            })}
          </UI.Wrapper>
        )
      })}
    </UI.CommonWrapper>
  )
}

export default Cards
