import React from 'react'
import { Icon, IconProps } from '../../../src'

const Example = (args: IconProps) => (
  <div>
    <Icon {...args} />
  </div>
)

Example.args = {
  icon: 'fa-facebook-f',
  brand: true
}

export default Example
