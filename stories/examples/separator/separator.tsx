import React from 'react'
import { Separator } from '../../../src'

const Example = (args: any) => (
  <Separator {...args} />
)

Example.args = {
  color: 'default'
}

Example.argTypes = {
  color: {
    control: { type: 'select' },
    options: ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']
  }
}

export default Example
