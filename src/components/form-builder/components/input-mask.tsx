import { FastField } from 'formik'
import { FastFieldProps } from 'formik/dist/FastField'
import React from 'react'
import ReactInputMask from 'react-input-mask'

type Props = {
  name: string
  attrs: {
    [key: string]: any
  }
  mask: string|Array<string|RegExp>
}

export const InputMask = ({ attrs, mask, name }: Props) => {
  return (
    <FastField name={name}>
      {({ field }: FastFieldProps) => <ReactInputMask {...field} {...attrs} mask={mask} />}
    </FastField>
  )
}
