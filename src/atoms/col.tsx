import React from 'react'
import classNames from 'classnames'

type columns = 1|2|3|4|5|6|7|8|9|10|11|12

export type ColProps = {
  size?: columns|columns[]|boolean
} & React.HTMLAttributes<HTMLDivElement>

const RESPONSIVE_FLAGS = ['', 'sm-', 'md-', 'lg-', 'xl-', 'xxl-']

export const Col: React.FC<ColProps> = ({ children, size = false, className, ...props }: ColProps) => {
  const columns = !Array.isArray(size)
    ? (typeof size === 'boolean' ? 'col-auto' : `col-${size}`)
    : size.map((value, key) => `col-${RESPONSIVE_FLAGS[key]}${value}`).join(' ')

  const classes = classNames(
    className,
    columns
  )

  return (
    <div {...props} className={classes}>{children}</div>
  )
}
