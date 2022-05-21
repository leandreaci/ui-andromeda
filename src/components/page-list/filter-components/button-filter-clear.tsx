import React from 'react'
import classNames from 'classnames'
import { Icon } from '../../../atoms/icon'
import { Button } from '../../../atoms/button'
import { objectHelper } from '../../../index'
import { useNavigate } from 'react-router-dom'
import uriHelper from '../../../utils/uri-helper'

type Props = {
  clearLabel: string
  className?: string
  show?: boolean
  search?: {
    [key: string]: any
  }
}

export const ButtonFilterClear: React.FC<Props> = (props: Props) => {
  const { className, clearLabel, show = true, search } = props
  const navigate = useNavigate()
  const classes = classNames(
    className,
    show ? 'd-inline-block' : 'd-none',
    'mb-3'
  )

  const handleClick = React.useCallback(() => {
    const whiteList = ['tab']
    const elements = objectHelper.destruct(search as object, ...whiteList)
    navigate({
      search: uriHelper.stringify({ ...elements, page: 1 })
    })
  }, [search, navigate])

  return (
    <Button color="warning" className={classes} onClick={handleClick}>
      <Icon icon="faTimes" className="me-2" />
      {clearLabel}
    </Button>
  )
}
