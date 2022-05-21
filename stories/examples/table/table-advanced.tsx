import React from 'react'
import { Table, TableProps } from '../../../src/molecules/table'

const Example = (args: TableProps) => (
   <Table {...args} />
)

Example.args = {
  nowrap: true,
  attributes: {
    thead: {
      th: {
        className: 'table-header-col'
      }
    },
    tbody: {
      td: {
        className: 'table-body-col'
      }
    }
  },
  headerArgs: [
    { title: 'ID' },
    { title: 'Name' },
    { title: 'Lastname' },
    {
      title: 'Actions',
      attributes: {
        th: {
          className: 'text-red'
        }
      }
    }
  ],
  body: [
    {
      attributes: {
        td: {
          className: 'active'
        }
      },
      id: 1,
      name: 'John',
      lastname: 'Smith',
      actions: <><span onClick={() => alert('edit line')}>Edit</span> | <span onClick={() => alert('delete line')}>Excluir</span></>
    },
    {
      id: 2,
      name: 'Mary',
      lastname: {
        value: 'Smith',
        attributes: {
          td: {
            colSpan: 2
          }
        }
      }
    }
  ]
}

export default Example
