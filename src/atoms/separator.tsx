import React from 'react'
import classNames from 'classnames'

export type SeparatorProps = {
  color?: 'default'|'primary'|'secondary'|'success'|'danger'|'warning'|'info'
}

export const Separator: React.FC<SeparatorProps> = ({ color = 'default' }: SeparatorProps) => {
  const classes = classNames(
    'line-separator',
    color
  )
  return (
    <div className={classes} />
  )
}
