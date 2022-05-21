import React from 'react'
import classNames from 'classnames'

export type RowProps = {
  justifyContent?: 'start'|'end'|'center'|'between'|'around'|'evenly'
  alignItems?: 'start'|'end'|'center'|'baseline'|'stretch'
  alignContent?: 'start'|'end'|'center'|'between'|'around'|'stretch'
  alignSelf?: 'auto'|'start'|'end'|'center'|'baseline'|'stretch'
} & React.HTMLAttributes<HTMLDivElement>

export const Row: React.FC<RowProps> = (props: RowProps) => {
  const {
    children,
    className,
    justifyContent,
    alignItems,
    alignContent,
    alignSelf
  } = props

  const classes = classNames(
    'row',
    !!className && className,
    !!justifyContent && `justify-content-${justifyContent}`,
    !!alignItems && `align-items-${alignItems}`,
    !!alignContent && `align-content-${alignContent}`,
    !!alignSelf && `align-self-${alignSelf}`
  )

  return (
    <div {...props} className={classes}>
      {children}
    </div>
  )
}
