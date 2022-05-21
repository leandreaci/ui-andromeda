import React, { HTMLAttributes } from 'react'
import classNames from 'classnames'

export type TypographyProps = HTMLAttributes<HTMLHeadingElement> & {
  variant?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'
  lineBottom?: boolean
  full?: boolean
  tag?: React.ElementType
  innerRef?: React.Ref<HTMLHeadingElement>
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'h1',
  lineBottom,
  full,
  children,
  tag: Tag = variant,
  innerRef,
  className,
  ...props
}: TypographyProps) => {
  const classes = classNames(
    className,
    variant,
    lineBottom && (full ? 'line-bottom-full' : 'line-bottom'),
    full && 'w-100'
  )

  return (
    <Tag
      {...props}
      className={classes}
      ref={innerRef}
    >{children}</Tag>
  )
}
