import React from 'react'

export type SpinnerProps = {
  color?: 'primary'|'secondary'|'success'|'danger'|'info'|'warning'
}

export const Spinner: React.FC<SpinnerProps> = (props: SpinnerProps) => {
  const {
    color = 'primary'
  } = props
  return <div className={`spinner spinner-${color}`} />
}
