import React from 'react'

export type TabListProps = {
  children: React.ReactNode
}

export const TabList: React.FC<TabListProps> = ({ children }: TabListProps) => {
  return (
    <div className="tab-list">{children}</div>
  )
}
