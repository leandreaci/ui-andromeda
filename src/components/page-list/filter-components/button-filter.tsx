import React from 'react'
import classNames from 'classnames'
import { Icon } from '../../../atoms/icon'
import { Button } from '../../../atoms/button'

type Props = {
  className?: string
  submitLabel: string
  show?: boolean
}

export const ButtonFilter: React.FC<Props> = (props: Props) => {
  const { className, submitLabel, show = true } = props
  const classes = classNames(
    className,
    show ? 'd-inline-block' : 'd-none',
    'mb-3'
  )

  return (
    <Button type="submit" className={classes}>
      <Icon icon="faSearch" className="me-2" />
      {submitLabel}
    </Button>
  )
}
