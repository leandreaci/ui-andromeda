import React from 'react'
import { Link, LinkProps } from '../../../src'

const Example = (args: LinkProps) => (
  <Link {...args} />
)

Example.args = {
  children: 'Home',
  href: '/home',
  target: '_self'
}

Example.argTypes = {
  align: {
    control: { type: 'select' },
    options: ['_self', '_black']
  }
}

export default Example
