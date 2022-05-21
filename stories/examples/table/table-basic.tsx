import React from 'react'
import { Table, TableProps } from '../../../src/molecules/table'

const Example = (args: TableProps) => (
   <Table {...args} />
)

Example.args = {
  header: ['ID', 'Name', 'Lastname'],
  body: [
    {
      id: 1,
      name: 'John',
      lastname: 'Smith'
    },
    {
      id: 2,
      name: 'Mary',
      lastname: 'Smith'
    }
  ]
}

export default Example
