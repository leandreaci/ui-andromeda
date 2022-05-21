import React from 'react'
import { Spinner, SpinnerProps } from '../../../src'

const Example = (args: SpinnerProps) => (
  <Spinner {...args} />
)

Example.args = {
  color: 'primary'
}

Example.argTypes = {
  color: {
    control: { type: 'select' },
    options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info']
  }
}
export default Example
