import React from 'react'
import classNames from 'classnames'

export type TabPanelProps = {
  children: React.ReactNode
  [key: string]: any
}

export const TabPanel: React.FC<TabPanelProps> = ({ children, active }: TabPanelProps) => {
  const classes = classNames(
    'tab-panel',
    active && 'active'
  )
  return (
    <div className={classes}>{children}</div>
  )
}
