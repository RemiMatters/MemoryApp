import React, { useState } from 'react'

import CreateNewCard from './CreateNewCard'
import Cards from './Cards'
import Btn from '../uikit/Btn'
import NewCards from './NewCards'
import { INewCard } from './types'

const MemoryApp = () => {
  const [    valueGetter,    valueSetter ] = useState('')
  const [ newCardsGetter, newCardsSetter ] = useState<INewCard[]>([])
  const [  sectionGetter,  sectionSetter ] = useState<'create' | 'cards' | 'newCards'>('create')

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, paddingTop: 8 }}>
        <Btn disabled={sectionGetter === 'create'} onClick={() => { sectionSetter('create') }}>Создать</Btn>
        <Btn disabled={sectionGetter === 'cards'} onClick={() => { sectionSetter('cards') }}>Карточки</Btn>
        {!!newCardsGetter.length && (
          <Btn disabled={sectionGetter === 'newCards'} onClick={() => { sectionSetter('newCards') }}>
            Новые
          </Btn>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {sectionGetter === 'create' && (
          <CreateNewCard
            value={valueGetter}
            setValue={valueSetter}
            onCreate={(value) => {
              newCardsSetter((prev) =>  ([ ...prev, { key: '' + (prev.length + 1), value } ]))
            }}
          />
        )}
        {sectionGetter === 'cards' && <Cards />}
        {sectionGetter === 'newCards' && <NewCards cards={newCardsGetter} />}
      </div>
    </div>
  )
}

export default MemoryApp
