import React, { useState } from 'react'

import Card from '../uikit/Card'
import Input from '../uikit/Input'
import Btn from '../uikit/Btn'

import cardsJson from '../stubs/cards.json'

import { INewCard } from './types'
import * as UI from './ui.styles'

const MemoryApp = () => {
  const [ value,    setValue    ] = useState('')
  const [ newCards, setNewCards ] = useState<INewCard[]>([])

  return (
    <UI.CommonWrapper>
      <UI.Wrapper style={{ minWidth: '100%' }}>
        <UI.Title>Создать свою карточку</UI.Title>
        <div style={{ width: 350 }}>
          <Input value={value} onChange={setValue} />
        </div>
        <Btn
          disabled={!value.trim()}
          onClick={() => { 
            setNewCards((prev) => {
              return [
                ...prev,
                { key: '' + (prev.length + 1), value: value.trim() },
              ]
            })
            setValue('')
          }}
        >
          Создать новую
        </Btn>
      </UI.Wrapper>
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
      {!!newCards.length && (
        <UI.Wrapper>
          <UI.Title>Новые карточки</UI.Title>
          <Btn
            onClick={() => { navigator.clipboard.writeText(JSON.stringify(newCards)) }}
          >
            Копировать карточки
          </Btn>
          {newCards.map((newCard, idx) => {
            return (
              <Card
                key={newCard.key}
                question={newCard.key}
                answer={newCard.value}
                onDelete={() => {
                  setNewCards([ ...newCards.slice(0, idx), ...newCards.slice(idx + 1) ])
                }}
              />
            )
          })}
        </UI.Wrapper>
      )}
    </UI.CommonWrapper>
  )
}

export default MemoryApp
