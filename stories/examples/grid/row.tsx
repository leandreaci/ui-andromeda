import React from 'react'
import { Row, RowProps } from '../../../src'

const Example = (args: RowProps) => (
  <Row {...args} />
)

Example.args = {
  children: 'Hello world'
}

Example.argTypes = {
  justifyContent: {
    control: { type: 'select' },
    options: ['start', 'end', 'center', 'between', 'around', 'evenly']
  },
  alignItems: {
    control: { type: 'select' },
    options: ['start', 'end', 'center', 'baseline', 'stretch']
  },
  alignContent: {
    control: { type: 'select' },
    options: ['start', 'end', 'center', 'between', 'around', 'stretch']
  },
  alignSelf: {
    control: { type: 'select' },
    options: ['auto', 'start', 'end', 'center', 'baseline', 'stretch']
  }
}

export default Example
