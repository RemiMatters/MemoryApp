import React from 'react'

interface IProps {
  value: string
  onChange: (value: string) => void
}

const Input = (props: IProps) => {
  const { value, onChange } = props

  return (
    <input
      value={value}
      onChange={(evt) => { onChange(evt.target.value) }}
    />
  )
}

export default Input
