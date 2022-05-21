import React from 'react'
import { FastField, FormikProps } from 'formik'

type Option = {
  label: string|number
  value: string|number
}

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
  actions: FormikProps<any>
  value?: string
  options: Option[]
}

export default function Checkbox (props: Props) {
  const {
    name,
    actions,
    value = [],
    options,
    id = name,
    tabIndex = 0,
    disabled
  } = props

  if (!options.length) return null

  const curValue = actions.values[name] || value || []

  const isChecked = (option: Option) => {
    const sanitized = curValue.map((value: any) => (value).toString())
    return ({
      checked: sanitized.includes((option.value).toString())
    })
  }

  return options.map((option, index) => (
    <div className="form-check" key={`${name}-${index}`}>
      <FastField
        value={option.value}
        name={name}
        id={`${id}-${index}`}
        {...isChecked(option)}
        {...{ disabled }}
        className="form-check-input"
        type="checkbox"
        tabIndex={tabIndex}
      />
      <label className="form-check-label" htmlFor={`${id}-${index}`}>{option.label}</label>
    </div>
  ))
}
