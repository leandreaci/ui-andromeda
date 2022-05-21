import React from 'react'
import { Button, ButtonProps } from '../../../src'

const Example = (args: ButtonProps) => (
  <div>
    <Button {...args} />
  </div>
)

Example.args = {
  children: 'Click Me',
  color: 'primary',
  small: false,
  outline: false,
  active: false,
  disabled: false,
  block: false
}

Example.argTypes = {
  color: {
    control: { type: 'select' },
    options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'default']
  }
}

export default Example
