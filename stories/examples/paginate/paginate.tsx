import React from 'react'
import { Paginate, PaginateProps } from '../../../src'

const Example = (args: PaginateProps) => (
  <Paginate {...args} />
)

Example.args = {
  totalItems: 100,
  activePage: 2,
  perPage: 6,
  currentCount: 6,
  onClick: () => null
}

export default Example
