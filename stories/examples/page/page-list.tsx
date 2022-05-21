import React from 'react'
import { PageList, PageListFilters, PageListFilter, PageListProps } from '../../../src'

const Example = (args: PageListProps) => (
  <PageList {...args}>
    <PageListFilters>
      <PageListFilter.Input name="name" placeholder="Name" />
      <PageListFilter.Select name="status" placeholder="Status" options={[
        {label: 'Active', value: '1'},
        {label: 'Inactive', value: '2'},
      ]} />
      <PageListFilter.Input name="identity" placeholder="Identity" mask="999.999.999-99" />
      <PageListFilter.Datepicker name="date" placeholder="Date" />
    </PageListFilters>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi deleniti ea, eaque explicabo incidunt inventore necessitatibus non perspiciatis praesentium quis quo sequi sit ut veniam, voluptate voluptatibus. Ad, inventore.</p>
    <p>Lorem ipsum dolor sit amet. Autem commodi deleniti ea, eaque explicabo incidunt inventore necessitatibus.</p>
    <p>A amet aspernatur at consequuntur dignissimos dolores, eaque illo iste maiores perspiciatis possimus quisquam quos repellendus saepe sed sit suscipit voluptate? Error?</p>
  </PageList>
)

Example.args = {
  title: 'List',
  addButton: {
    uri: '/list/new',
    label: 'Add'
  },
  loading: false,
  extraButtons: [
    { uri: '/import', label: 'Import' },
    { uri: '/export', label: 'Export' }
  ],
  meta: {
    current_page: 1,
    per_page: 12,
    total: 48,
  },
  filter: {
    filterLabel: 'Filters',
    submitLabel: 'Filter',
    clearLabel: 'Clear'
  }
}

export default Example
