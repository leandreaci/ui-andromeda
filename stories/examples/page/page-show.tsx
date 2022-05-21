import React from 'react'
import {PageShow, PageShowProps} from '../../../src'

const Example = (args: PageShowProps) => (
  <PageShow {...args} />
)

Example.args = {
  title: 'Show',
  extraButtons: [
    {
      label: 'Edit client',
      uri: '/vehicle/number/edit'
    }
  ],
  backButton: {
    uri: '/vehicle',
    label: 'Voltar'
  },
  loading: false,
  children: <p>Lorem ipsum dolor amet consectetur</p>
}

export default Example
