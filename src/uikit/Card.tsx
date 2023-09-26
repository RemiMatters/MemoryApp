import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  border-radius: 8px;
  padding: 8px;
  width: 300px;
  min-height: 40px;
  background: lightblue;
  cursor: pointer;
`

interface IProps {
  className?: string
  question: React.ReactNode
  answer: React.ReactNode
}

const Card = (props: IProps) => {
  const { className, question, answer } = props

  const [ open, setOpen ] = useState(false)

  return (
    <Wrapper className={className} onClick={() => { setOpen(!open) }}>
      {open ? answer : question}
    </Wrapper>
  )
}

export default Card
