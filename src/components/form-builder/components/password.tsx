import React from 'react'
import { Field, FormikProps } from 'formik'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
  actions: FormikProps<any>
  labelButton?: string
}

export default function Password (props: Props) {
  const {
    name,
    id = name,
    tabIndex = 0,
    actions,
    labelButton = 'show',
    ...elements
  } = props

  const validOptions = {
    alt: elements.alt,
    autoComplete: elements.autoComplete,
    autoFocus: elements.autoFocus,
    checked: elements.checked,
    disabled: elements.disabled,
    max: elements.max,
    maxLength: elements.maxLength,
    min: elements.min,
    minLength: elements.minLength,
    multiple: elements.multiple,
    placeholder: elements.placeholder,
    readOnly: elements.readOnly,
    required: elements.required
  }

  const [visible, setVisible] = React.useState(false)

  const handleVisible = () => {
    setVisible(prev => !prev)
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (actions.setFieldValue) {
      actions.setFieldValue(name, event.currentTarget.value)
    }
  }

  const handleFocus = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.readOnly = false
  }

  return (
    <div className="position-relative">
      <div
        role="button"
        className={`form-password-button${visible ? ' visible' : ''}`}
        onClick={handleVisible}
      >{labelButton}</div>
      <Field
        {...validOptions}
        type={visible ? 'text' : 'password'}
        className="form-control"
        name={name}
        id={id}
        tabIndex={tabIndex}
        onChange={handleChange}
        readOnly
        autoComplete="off"
        onFocus={handleFocus}
      />
    </div>
  )
}
