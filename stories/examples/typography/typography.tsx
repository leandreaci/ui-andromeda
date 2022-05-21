import React from 'react'
import { Typography, TypographyProps } from '../../../src/atoms/typography'

const Example = (args: TypographyProps) => (
   <Typography {...args} />
)

Example.args = {
  children: 'Heading',
  variant: 'h1',
  tag: 'h1',
  lineBottom: false,
  full: false
}

const select = {
  control: { type: 'select' },
  options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
}

Example.argTypes = {
  variant: select,
  tag: select
}

export default Example
