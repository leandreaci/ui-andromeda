import React from 'react'
import classNames from 'classnames'
import { Icon } from '../../../atoms/icon'
import { Button } from '../../../atoms/button'

type Props = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  filterLabel: string
  className?: string
}

export const ButtonFilters: React.FC<Props> = (props: Props) => {
  const {
    show = false,
    setShow,
    filterLabel,
    className
  } = props
  const classes = classNames(
    className,
    'mb-3'
  )

  const handleClick = () => {
    setShow(prev => !prev)
  }

  return (
    <Button color="info" outline={!show} onClick={handleClick} className={classes}>
      <Icon icon="faFilter" className="me-2" />
      {filterLabel}
    </Button>
  )
}
