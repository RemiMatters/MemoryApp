import React from 'react'

import Card from '../uikit/Card'

import cardsJson from '../stubs/cards.json'

import * as UI from './ui.styles'

const Cards = () => {
  return (
    <>
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
    </>
  )
}

export default Cards
