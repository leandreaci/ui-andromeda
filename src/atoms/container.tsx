import React from 'react'
import classNames from 'classnames'

export type ContainerProps = {
  type?: 'fluid'|'xxl'|'xl'|'lg'|'md'|'sm'
} & React.HTMLAttributes<HTMLDivElement>

export const Container = ({ children, className, type, ...props }: ContainerProps) => {
  const classes = classNames(
    (!!className && className),
    `container${type ? '-' + type : ''}`
  )
  return (
    <div
      {...props}
      className={classes}
    >{children}</div>
  )
}
