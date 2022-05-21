import React from 'react'
import { FilterForm } from './filter-components/filter-form'
import { Row } from '../../atoms/row'
import { Col } from '../../atoms/col'
import { ButtonFilter } from './filter-components/button-filter'
import { ButtonFilterClear } from './filter-components/button-filter-clear'
import { ButtonFilters } from './filter-components/button-filters'
import { Icon } from '../../atoms/icon'
import { Button } from '../../atoms/button'

type PageListGetFiltersProps = {
  filterList: any
  search: any
  filter?: {
    filterLabel?: string
    submitLabel?: string
    clearLabel?: string
  }
  numFiltersVisible?: number
}

const setValue = (element: any, value?: string) => {
  return {
    ...element,
    props: {
      ...element.props,
      value: value
    }
  }
}

export const PageListGetFilters: React.FC<PageListGetFiltersProps> = (props: PageListGetFiltersProps) => {
  const {
    numFiltersVisible = 2,
    filterList, search,
    filter = {
      filterLabel: 'Filters',
      submitLabel: 'Filter',
      clearLabel: 'Clear'
    }
  } = props
  const filters = filterList?.props.children

  if (!filterList) return null

  const visible = Array.isArray(filters) ? filters.slice(0, numFiltersVisible) : [filters]
  const hidden = Array.isArray(filters) ? filters.slice(numFiltersVisible) : []
  const [showFilter, setShowFilter] = React.useState(false)

  return (
    <FilterForm search={search}>
      <Row>
        {visible.map((element, index) => (
          <Col size={[12, 6, 4, 3]} key={index} className="mb-3">{setValue(element, search[element.props.name])}</Col>
        ))}
        <Col>
          <div className="form-group" id="btns-filter">
            <label className="form-label" htmlFor="btns-filter">&nbsp;</label>
            <div>
              <ButtonFilter submitLabel={filter.submitLabel!} className="me-3" />
              <ButtonFilterClear clearLabel={filter.clearLabel!} className="me-3" search={search} />
              <ButtonFilters show={showFilter} setShow={setShowFilter} filterLabel={filter.filterLabel!} />
            </div>
          </div>
        </Col>
      </Row>
      {Boolean(hidden.length) && (
        <div className={`aside-filter ${showFilter ? 'in' : ''}`}>
          <div className="mb-3 text-right">
            <Button color="info" outline={showFilter} onClick={() => setShowFilter(prev => !prev)} small>
              <Icon icon="faTimes" />
            </Button>
          </div>
          <Row>
            {hidden.map((element, index) => (
              <Col size={12} key={`visible-child-${index + 100}`} className="mb-3">
                {setValue(element, search[element.props.name])}
              </Col>
            ))}
            <Col size={12} className={showFilter ? 'd-block' : 'd-none'}>
              <ButtonFilter submitLabel={filter.submitLabel!} className="me-3" />
              <ButtonFilterClear clearLabel={filter.clearLabel!} search={search} />
            </Col>
          </Row>
        </div>
      )}
    </FilterForm>
  )
}
