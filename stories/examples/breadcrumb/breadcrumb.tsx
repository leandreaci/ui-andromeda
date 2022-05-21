import React from 'react'
import { Breadcrumb, BreadcrumbProps } from '../../../src'

const Example = (args: BreadcrumbProps) => (
  <Breadcrumb {...args} />
)

Example.args = {
  items: [
    { uri: '/', label: 'Home' },
    { uri: '/products', label: 'Products' },
    { label: 'Lorem ipsum' }
  ]
}

export default Example
