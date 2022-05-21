import React from 'react'
import ReactPagination from 'react-js-pagination'
import uriHelper from '../utils/uri-helper'
import { useLocation, useNavigate } from 'react-router-dom'

const config = {
  pageRangeDisplayed: 3,

  hideDisabled: true,
  hideFirstLastPages: false,
  hideNavigation: false,

  prevPageText: '‹',
  firstPageText: '«',
  nextPageText: '›',
  lastPageText: '»',

  linkClassFirst: 'arrow first',
  linkClassPrev: 'arrow prev',
  linkClassNext: 'arrow next',
  linkClassLast: 'arrow last'
}

export type PaginateProps = {
  totalItems: number
  activePage: number
  perPage: number
  currentCount: number
  translate?: string
}

export const Paginate: React.FC<PaginateProps> = (props: PaginateProps) => {
  const {
    activePage,
    perPage,
    totalItems,
    currentCount,
    translate = '%1 out of %2 records'
  } = props
  const history = useLocation()
  const navigate = useNavigate()
  const search = uriHelper.parse(history.search)

  const handleChange = (page: number) => {
    Object.assign(search, { page })
    navigate({
      search: uriHelper.stringify(search)
    })
  }

  return (
    <div className="box-paginate">
      <ReactPagination
        { ...config }
        activePage={activePage}
        itemsCountPerPage={perPage}
        totalItemsCount={totalItems}
        onChange={handleChange}
      />
      <div className="extra-paginate-info">
        {translate.replace(/%(\d+)/g, (_, n) => [String(currentCount), String(totalItems)][+n - 1])}
      </div>
    </div>
  )
}
