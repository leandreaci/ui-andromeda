import React from 'react'
import {PageCreate, PageCreateProps} from '../../../src'

const Example = (args: PageCreateProps) => (
  <PageCreate {...args} />
)

Example.args = {
  title: 'Create',
  extraButtons: [
    {
      label: 'Add multiple vehicles',
      uri: '/vehicle/import'
    }
  ],
  cancelButton: {
    uri: '/vehicle',
    label: 'Cancel'
  },
  onSubmit: () => {},
  data: [
    {
      name: 'Personal data',
      items: [
        {
          name: 'name',
          component: 'input',
          type: 'text',
          column: 6,
          title: 'Name',
          placeholder: 'Your name',
          autoComplete: 'off',
          mask: '',
          validations: [
            {
              type: 'required',
              params: ['The name is required']
            }
          ]
        },
        {
          name: 'lastname',
          component: 'input',
          column: 6,
          title: 'Lastname',
          placeholder: 'Your lastname'
        },
        {
          name: 'submit',
          component: 'button',
          type: 'submit',
          column: 12,
          label: 'Submit',
          labelLoading: 'Submitting'
        }
      ]
    }
  ]
}

export default Example
