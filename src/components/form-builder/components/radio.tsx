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

export default function Radio (props: Props) {
  const {
    name,
    actions,
    value,
    options,
    id = name,
    tabIndex = 0,
    disabled
  } = props

  if (!options.length) return null

  const curValue = actions.values[name] || value

  const isChecked = (option: Option) => {
    return ({
      checked: (option.value).toString() === (curValue).toString()
    })
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event as any)
    }
    if (actions.setFieldValue) {
      actions.setFieldValue(name, event.currentTarget.value)
    }
  }

  return options.map((option, index) => (
    <div className="form-check" key={`${name}-${index}`}>
      <FastField
        value={option.value}
        name={name}
        id={`${id}-${index}`}
        {...isChecked(option)}
        {...{ disabled }}
        type="radio"
        tabIndex={tabIndex}
        className="form-check-input"
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={`${id}-${index}`}>{option.label}</label>
    </div>
  ))
}
