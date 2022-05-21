import React from 'react'

type PageListFiltersProps = {
  children: React.ReactNode
}

export const PageListFilters: React.FC<PageListFiltersProps> = ({ children }: PageListFiltersProps) => {
  return (
    <div className="page-list-filters">
      {children}
    </div>
  )
}

PageListFilters.displayName = 'PageListFilters'
