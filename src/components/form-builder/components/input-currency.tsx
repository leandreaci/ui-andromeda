import { FastField } from 'formik'
import { FastFieldProps } from 'formik/dist/FastField'
import React from 'react'
import numberHelper from '../../../utils/number-helper'

type Props = {
  name: string
  attrs: {
    [key: string]: any
  }
  handleChange: (params: any) => void
  currency: {
    locale: string
    format: string
  }
}

export const InputCurrency = ({ attrs, handleChange, currency, name }: Props) => {
  const handleChangeCurrency = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    const sanitize = numberHelper.currencySanitize(value)
    handleChange({
      currentTarget: {
        name,
        value: sanitize ? numberHelper.currency(Number(sanitize), currency.locale, currency.format) : ''
      }
    } as React.FormEvent<HTMLInputElement>)
  }

  return (
    <FastField name={name}>
      {({ field }: FastFieldProps) => <input {...field} {...attrs} onChange={handleChangeCurrency} min="0" maxLength={20} />}
    </FastField>
  )
}
