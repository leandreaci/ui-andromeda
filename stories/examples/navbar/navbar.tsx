import React from 'react'
import { Navbar, NavbarProps } from '../../../src'

const Example = (args: NavbarProps) => (
  <div style={{ height: 200 }}>
    <Navbar {...args} />
  </div>
)

Example.args = {
  image: {
    src: 'https://picsum.photos/id/1003/60/90',
    alt: 'User name'
  },
  dropdown: {
    label: 'User name',
    align: 'right',
    items: [
      { label: 'abc', uri: '/abc', target: '_self' },
      { label: 'def', uri: '/def', target: '_self' },
      { separator: true },
      { label: 'ghi', uri: '/ghi', target: '_self' }
    ]
  }
}

Example.argTypes = {
  image: {
    control: { type: 'select' },
    options: [null, {
      src: 'https://picsum.photos/id/1003/60/90',
      alt: 'User name'
    }]
  }
}

export default Example
