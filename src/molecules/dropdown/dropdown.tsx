import React from 'react'
import classNames from 'classnames'
import { DropdownItem, DropdownItemProps } from './dropdown-item'

export type DropdownProps = {
  tag?: 'button'|'div',
  label: string|React.ReactNode
  color?: 'none'|'primary'|'secondary'|'success'|'danger'|'info'|'warning'|'default'
  items: DropdownItemProps[]
  className?: string
  align?: 'left'|'right'
}

export const Dropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const {
    tag: Tag = 'button',
    label,
    color = 'primary',
    items,
    className,
    align = 'left'
  } = props

  const ref = React.useRef<HTMLDivElement>(null)

  const classes = classNames(
    className,
    'dropdown-toggle',
    Tag === 'button' && 'btn',
    color !== 'none' && `btn-${color}`
  )

  const [toggle, setToggle] = React.useState(false)

  const handleClick = React.useCallback(() => {
    setToggle(prev => !prev)
  }, [])

  const handleClickOut = React.useCallback((event) => {
    if (ref.current?.contains(event.target)) {
      return
    }

    setToggle(false)
  }, [])

  React.useEffect(() => {
    if (toggle) {
      document.addEventListener('mousedown', handleClickOut)
    } else {
      document.removeEventListener('mousedown', handleClickOut)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOut)
    }
  }, [toggle])

  const classesDropdown = classNames(
    'dropdown-menu',
    align,
    toggle && 'show'
  )

  return (
    <div ref={ref} className="dropdown">
      <Tag className={classes} onClick={handleClick}>
        {label}
      </Tag>
      <div className={classesDropdown}>
        {items.map((item, index) => (
          <DropdownItem key={`dropdown-item-${index}`} {...item} />
        ))}
      </div>
    </div>
  )
}
