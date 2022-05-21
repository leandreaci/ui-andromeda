import React from 'react'
import { Input, InputProps } from '../../../src/atoms/input'

const Example = (args: InputProps) => (
  <div>
    <Input {...args} />
  </div>
)

Example.args = {
  placeholder: 'Name'
}

export default Example
