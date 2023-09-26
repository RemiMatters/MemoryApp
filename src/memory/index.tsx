import React, { useState } from 'react'
import styled from 'styled-components'

import Card from '../uikit/Card'
import Input from '../uikit/Input'

const CommonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 20px;
  max-width: 400px;
`

/*
<Card
  question="1"
  answer="text"
/>
*/

const MemoryApp = () => {
  const [ value, setValue ] = useState('')
  const [ newCards, setNewCards ] = useState<string[]>([])

  return (
    <CommonWrapper>
      <Wrapper style={{ minWidth: '100%' }}>
        <div>Создать свою карточку</div>
        <Input value={value} onChange={setValue} />
        <button onClick={() => { setNewCards((prev) => ([ ...prev, value ])) }}>create</button>
      </Wrapper>
      <Wrapper>
        <div>Топ недостатков текущего приложения</div>
        <Card
          question="1"
          answer="Содавшаяся карточка не сохраняется в localStorage"
        />
        <Card
          question="2"
          answer="Нет базовой защиты"
        />
        <Card
          question="3"
          answer="Дизайн"
        />
      </Wrapper>
      <Wrapper>
        <div>Топ преимуществ текущего приложения</div>
        <Card
          question="1"
          answer="Оно легко кастомизируется"
        />
        <Card
          question="2"
          answer="Доступно с любого устройства"
        />
        <Card
          question="3"
          answer="Не занимает места"
        />
      </Wrapper>
      <Wrapper>
        <div>Цели и задачи</div>
        <Card
          question="1"
          answer="Цель - это то, к чему я стремлюсь. Задача - это ступенька на пути к цели"
        />
        <Card
          question="2"
          answer="Цель может иметь несколько разных наборов задач"
        />
        <Card
          question="3"
          answer="При принятии решений необходимо держать в голове какие у меня цели"
        />
        <Card
          question="4"
          answer="Разложить сложные задачи на простые"
        />
        <Card
          question="5"
          answer="Рассматривать от трех разных наборов задач"
        />
      </Wrapper>
      <Wrapper>
        <div>Общение</div>
        <Card
          question="1"
          answer="Проверять заранее, занят ли другой, и в наушниках ли он сейчас"
        />
      </Wrapper>
      {!!newCards.length && (
        <Wrapper>
          <div>Новые карточки</div>
          {newCards.map((newCard, idx) => {
            const key = '' + (idx + 1)

            return (
              <Card
                key={key}
                question={key}
                answer={newCard}
                onDelete={() => { setNewCards([ ...newCards.slice(0, idx), ...newCards.slice(idx + 1) ]) }}
              />
            )
          })}
        </Wrapper>
      )}
      <Wrapper>
        <div>заметки</div>
        <div>
          приоритетность целей хорошо формируется в процессе мышления но если думать лень то можно запихнуть их в карточки и надеяться что они обдумаются автоматически
        </div>
      </Wrapper>
    </CommonWrapper>
  )
}

export default MemoryApp
