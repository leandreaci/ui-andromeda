import React from 'react'
import { Card, CardProps } from '../../../src/molecules/card'

const Example = (args: CardProps) => (
  <div>
    <Card {...args} />
  </div>
)

Example.args = {
  children: 'This is my body',
  title: 'This is my title',
  footer: 'this is my footer'
}

export default Example
