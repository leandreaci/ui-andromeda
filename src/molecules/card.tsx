import React from 'react'
import { Typography } from '../atoms/typography'
import classNames from 'classnames'

export type CardProps = {
  children: React.ReactNode
  title?: string
  header?: React.ReactNode
  footer?: React.ReactNode
  fullHeight?: boolean
  className?: string
}

export const Card: React.FC<CardProps> = (props: CardProps) => {
  const {
    children,
    title,
    header,
    footer,
    fullHeight = false
  } = props

  const classes = classNames(
    'card',
    fullHeight && 'mh-100',
    footer && 'justify-content-between'
  )
  return (
    <div className={classes}>
      {!!(title || header) && (
        <div className="card-header">
          {!!title && <Typography variant="h4" className="card-title">{title}</Typography>}
          {header}
        </div>
      )}
      <div className="card-body">{children}</div>
      {!!footer && (
        <div className="card-footer">{footer}</div>
      )}
    </div>
  )
}
