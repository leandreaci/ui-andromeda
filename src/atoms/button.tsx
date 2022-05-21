import React, { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary'|'secondary'|'success'|'danger'|'info'|'warning'|'default'
  outline?: boolean
  active?: boolean
  disabled?: boolean
  block?: boolean
  small?: boolean
  tag?: React.ElementType
  innerRef?: React.Ref<HTMLButtonElement>
  href?: string
  'aria-label'?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  active,
  block,
  className,
  color = 'primary',
  disabled,
  small = false,
  href,
  outline,
  innerRef,
  'aria-label': ariaLabel,
  ...props
}: ButtonProps) => {
  let { tag: Tag = 'button' } = props

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (disabled) {
      e.preventDefault()
      return
    }

    if (props.onClick) return props.onClick(e)
  }

  const btnOutlineColor = `btn${outline ? '-outline' : ''}-${color}`

  const classes = classNames(
    className,
    'btn',
    btnOutlineColor,
    small && 'btn-small',
    block ? 'd-block w-100' : false,
    { active, disabled }
  )

  if (href && Tag === 'button') {
    Tag = 'a'
  }

  return (
    <Tag
      {...(Tag === 'button' && props.onClick && { type: 'button' })}
      {...props}
      {...(href && { href })}
      className={classes}
      ref={innerRef}
      onClick={handleClick}
      aria-label={ariaLabel}
    >{children}</Tag>
  )
}
