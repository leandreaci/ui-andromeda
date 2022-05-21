import { Input } from './input'
import React from 'react'

export type RadioProps = {
  name: string
  className?: string
  id?: string
}

export const Radio = ({ name, id, ...props }: RadioProps) => {
  return (
    <Input type="radio" { ...props } id={id || name} name={name} />
  )
}
