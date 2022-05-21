import React from 'react'
import { FastField, FormikProps } from 'formik'
import classNames from 'classnames'
import { InputCurrency } from './input-currency'
import { InputMask } from './input-mask'
import { InputPrefixSuffix } from './input-prefix-suffix'
import { FormBuilderBasicsItem } from '../form-builder.types'

export interface FormBuildItemInput extends FormBuilderBasicsItem {
  component?: 'input'
  type?: 'text'|'button'|'checkbox'|'email'|'file'|'hidden'|'number'|'submit'|'reset'|'color'
  mask?: string|Array<string|RegExp>
  multiple?: boolean
  currency?: {
    locale: string,
    format: string
  }
  suffix?: string
  prefix?: string
}

type Props = Omit<FormBuildItemInput, 'component'> & {
  actions: FormikProps<any>
}

export default function Input (props: Props) {
  const {
    name,
    id = name,
    type = 'text',
    tabIndex = 0,
    actions,
    value = '',
    mask,
    multiple = false,
    currency,
    className,
    prefix,
    suffix,
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
    placeholder: elements.placeholder,
    readOnly: elements.readOnly,
    required: elements.required
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (elements.onChange) {
      elements.onChange({
        currentTarget: {
          ...event.currentTarget,
          name
        }
      })
    }

    if (elements.onBlur) {
      elements.onBlur({
        currentTarget: {
          ...event.currentTarget,
          name
        }
      })
    }

    if (actions.setFieldValue) {
      actions.setFieldValue(name, event.currentTarget.value)
    }
  }

  const curValue = actions.values[name] || value

  const classes = classNames(
    className,
    'form-control'
  )

  const attrs = {
    ...validOptions,
    value: curValue,
    className: classes,
    name,
    id,
    type,
    tabIndex,
    autoComplete: 'none',
    onChange: handleChange
  }

  if (currency) return <InputCurrency {...{ name, attrs, currency, handleChange }} />

  if (mask) return <InputMask {...{ name, attrs, mask }} />

  if (prefix || suffix) return <InputPrefixSuffix {...{ attrs, suffix, prefix }} />

  return (
    <FastField
      {...attrs}
      as={multiple ? 'textarea' : 'input'}
      readOnly
      onFocus={(event: React.FormEvent<HTMLInputElement>) => {
        event.currentTarget.readOnly = false
      }}
  />
  )
}
