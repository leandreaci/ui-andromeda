import { Typography } from '../../atoms/typography'
import { Row } from '../../atoms/row'
import { Col } from '../../atoms/col'
import React from 'react'
import { Button } from '../../atoms/button'
import { Icon } from '../../atoms/icon'
import { Link } from '../../atoms/link'
import { Dropdown } from '../../molecules/dropdown/dropdown'
import { DropdownItemProps } from '../../molecules/dropdown/dropdown-item'
import { Paginate } from '../../molecules/paginate'
import { useLocation } from 'react-router-dom'
import uriHelper from '../../utils/uri-helper'
import { PageListGetFilters } from './page-list-get-filters'
import { Spinner } from '../../atoms/spinner'

type BtnProps = {
  uri: string
  label: string
}

type ChildrenProp = {
  type: string | {
    name?: string
    displayName?: string
  },
  props: ChildrenProps|any
}

type ChildrenProps = {
  children: ChildrenProp|ChildrenProp[]
}

export type PageListProps = ChildrenProps & {
  title: string|React.ReactNode
  addButton?: BtnProps,
  extraButtons?: DropdownItemProps[]
  customizeFilter?: React.ReactNode
  loading?: boolean
  filter?: {
    filterLabel?: string
    submitLabel?: string
    clearLabel?: string
  }
  meta: {
    current_page: number
    per_page: number
    total: number
    to: number
    from: number
  }
  metaTranslate?: string
}

export const PageList: React.FC<PageListProps> = (props: PageListProps) => {
  const {
    title,
    addButton,
    extraButtons = [],
    meta,
    filter,
    customizeFilter,
    loading = false,
    metaTranslate = '%1 out of %2 records',
    children
  } = props
  const totalRecords = meta?.to ? (meta.to - meta.from) + 1 : 0
  const history = useLocation()
  const search = uriHelper.parse(history.search)
  const filterList = Array.isArray(children) ? children.find(child => typeof child.type !== 'string' && child.type?.displayName === 'PageListFilters') : null
  const restList = Array.isArray(children) ? children?.filter(child => child !== filterList) : children

  if (loading) {
    return (
      <div className="my-5">
        <Spinner />
      </div>
    )
  }

  return (
    <>
      <Row className="mb-3">
        <Col>
          <Typography lineBottom variant="h4" tag="h1">{title}</Typography>
        </Col>
        <Col className="ms-auto">
          {Boolean(extraButtons.length) && (
            <Dropdown
              color="default"
              className="me-2"
              label={<Icon icon="faEllipsisH" />}
              items={extraButtons}
            />
          )}

          {Boolean(addButton) && (
            <Button tag={Link} href={addButton?.uri}>
              <Icon icon="faPlus" className="me-1" />
              {addButton?.label}
            </Button>
          )}
        </Col>
      </Row>

      {customizeFilter || <PageListGetFilters filterList={filterList} search={search} filter={filter} key={Math.random()} />}

      <div>{restList}</div>

      {meta && <Paginate
        activePage={meta.current_page}
        perPage={meta.per_page}
        totalItems={meta.total}
        currentCount={totalRecords}
        translate={metaTranslate}
      />}
    </>
  )
}
