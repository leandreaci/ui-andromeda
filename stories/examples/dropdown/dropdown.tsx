import React from 'react'
import { Dropdown, DropdownProps } from '../../../src'

const Example = (args: DropdownProps) => (
  <div style={{ height: 200 }}>
    <Dropdown
      {...args}
      items={[
        { label: 'abc', uri: '/abc', target: '_self' },
        { label: 'def', uri: '/def', target: '_self' },
        { separator: true },
        { label: 'ghi', uri: '/ghi', target: '_self' },
        { label: 'jlm', onClick: () => alert('clicked') }
      ]}
    />
  </div>
)

Example.args = {
  label: 'User name',
  color: 'primary',
  align: 'left'
}

Example.argTypes = {
  color: {
    control: { type: 'select' },
    options: ['none', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'default']
  },
  align: {
    control: { type: 'select' },
    options: ['left', 'right']
  }
}

export default Example
