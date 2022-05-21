import React from 'react'
import { Label, LabelProps } from '../../../src/atoms/label'

const Example = (args: LabelProps) => (
   <Label {...args} />
)

Example.args = {
  children: 'Name',
  htmlFor: 'name',
  inline: false
}

export default Example
