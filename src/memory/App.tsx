import React, { useState } from 'react'

import * as UI from './ui.styles'
import CreateNewCard from './CreateNewCard'
import Cards from './Cards'
import NewCards from './NewCards'
import { INewCard } from './types'

const MemoryApp = () => {
  const [    valueGetter,    valueSetter ] = useState('')
  const [ newCardsGetter, newCardsSetter ] = useState<INewCard[]>([])

  return (
    <UI.CommonWrapper>
      <CreateNewCard
        value={valueGetter}
        setValue={valueSetter}
        onCreate={(value) => {
          newCardsSetter((prev) =>  ([ ...prev, { key: '' + (prev.length + 1), value } ]))
        }}
      />
      <Cards />
      <NewCards
        cards={newCardsGetter}
        onDelete={(idx) => {
          newCardsSetter([ ...newCardsGetter.slice(0, idx), ...newCardsGetter.slice(idx + 1) ])
        }}
      />
    </UI.CommonWrapper>
  )
}

export default MemoryApp
