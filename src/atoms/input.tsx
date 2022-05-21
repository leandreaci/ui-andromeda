import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import classNames from 'classnames'

type InputType =
  | 'text' | 'email' | 'select' | 'textarea'
  | 'file' | 'radio' | 'checkbox' | 'switch'
  | 'button' | 'reset' | 'submit' | 'date'
  | 'hidden' | 'image' | 'month' | 'number'
  | 'range' | 'search' | 'tel' | 'url' | 'week'
  | 'password' | 'datetime' | 'time' | 'color'

type Attributes = InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>
export type InputProps = Attributes & {
  type?: InputType
  valid?: boolean
  invalid?: boolean
  addon?: boolean
  innerRef?: React.Ref<HTMLInputElement|HTMLTextAreaElement>
  tag?: string
}

export const Input: React.FC<InputProps> = ({
  className,
  type,
  tag,
  addon,
  valid,
  invalid,
  innerRef,
  ...props
}: InputProps) => {
  const isCheck = ['switch', 'radio', 'checkbox'].indexOf(type!) > -1
  const isTextarea = type === 'textarea'
  const isSelect = type === 'select'
  const isRange = type === 'range'
  const isColor = type === 'color'

  const Tag = tag || (isSelect || isTextarea ? type : 'input') as InputProps

  let formControlClass = 'form-control'

  if (isRange) {
    formControlClass = 'form-range'
  } else if (isSelect) {
    formControlClass = 'form-select'
  } else if (isColor) {
    formControlClass = 'form-control form-control-color'
  } else if (isCheck) {
    if (addon) {
      formControlClass = ''
    } else {
      formControlClass = 'form-check-input'
    }
  }

  const classes = classNames(
    className,
    invalid && 'is-invalid',
    valid && 'is-valid',
    formControlClass
  ) as string

  if (
    props.children && !(
      type === 'select' ||
      typeof Tag !== 'string' ||
      Tag === 'select'
    )
  ) {
    Reflect.deleteProperty(props, 'children')
  }

  // @ts-ignore
  return <Tag {...props} className={classes} ref={innerRef} type={type} />
}
