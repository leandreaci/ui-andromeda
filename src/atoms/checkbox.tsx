import { Input } from './input'
import React from 'react'

export type CheckoutProps = {
  name: string
  className?: string
  id?: string
}

export const Checkout = ({ name, id, ...props }: CheckoutProps) => {
  return (
    <Input type="checkbox" { ...props } id={id || name} name={name} />
  )
}
