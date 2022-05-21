import React from 'react'
import { Field, FieldProps } from '../../../src'

const Example = (args: FieldProps) => (
  <Field {...args} />
)

Example.args = {
  label: 'Name',
  value: 'John Smith'
}

export default Example
