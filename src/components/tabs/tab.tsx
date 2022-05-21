import React from 'react'
import { Link } from '../../atoms/link'
import classNames from 'classnames'

export type TabProps = {
  children: React.ReactNode
  [key: string]: any
}

export const Tab: React.FC<TabProps> = ({ children, href, active }: TabProps) => {
  const classes = classNames(
    'tab',
    active && 'active'
  )

  return (
    <Link className={classes} href={href}>{children}</Link>
  )
}
