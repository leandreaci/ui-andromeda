import React from 'react'
import { FormikProps } from 'formik'
import { Button } from '../../../atoms/button'

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  type?: 'submit'|'reset'|'button'
  actions: FormikProps<any>
  color?: 'primary'|'secondary'|'success'|'danger'|'warning'|'info'
  label: string
  labelLoading?: string
}

export default function Input (props: Props) {
  const {
    type = 'button',
    actions,
    color = 'primary',
    label,
    labelLoading = label,
    className,
    ...elements
  } = props

  return (
    <div>
      <Button
        {...elements}
        className={className}
        type={type}
        color={color}
      >
        {actions.isSubmitting
          ? labelLoading
          : label
        }
      </Button>
    </div>
  )
}
