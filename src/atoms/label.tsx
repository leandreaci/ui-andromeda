import React from 'react'
import classNames from 'classnames'

export type LabelProps = {
  htmlFor: string
  inline?: boolean
  innerRef?: React.Ref<HTMLLabelElement>
} & React.LabelHTMLAttributes<HTMLLabelElement>

export const Label: React.FC<LabelProps> = ({ htmlFor, inline, innerRef, children, className, ...props }: LabelProps) => {
  const classes = classNames(
    className,
    'form-label',
    inline ? 'd-inline-block' : 'd-block'
  )

  return (
    <label
      {...props}
      htmlFor={htmlFor}
      ref={innerRef}
      className={classes}
    >{children}</label>
  )
}
