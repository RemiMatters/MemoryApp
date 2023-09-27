import styled from 'styled-components'

export const Btn = styled.button.attrs({ type: 'button' })`
  all: unset;
  cursor: pointer;
  background: #09f;
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  font-weight: 600;
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`
