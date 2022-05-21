import React from 'react'
import { ErrorMessage } from 'formik'
import { FormBuilderItemHelper } from '../utils/form-builder-item-helper'
import { FormBuilderValidationProps } from '../form-builder.types'

type FormGroupProps = {
  name: string,
  title?: string
  children?: React.ReactNode
  validations?: FormBuilderValidationProps[]
}

export const FormGroup = (props: FormGroupProps) => {
  const {
    name,
    title,
    children,
    validations
  } = props

  const required = FormBuilderItemHelper.init(validations).isRequired() ? <span>*</span> : null

  return (
    <div className="form-group">
      <label className="form-label" htmlFor={name}>{title}{required}</label>
      {children}
      <ErrorMessage
        name={name}
        component={({ children }) => <div className="invalid-feedback">{children}</div>}
      />
    </div>
  )
}
