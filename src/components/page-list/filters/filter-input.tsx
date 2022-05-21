import React from 'react'
import classNames from 'classnames'
import InputMask from 'react-input-mask'

type FilterInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string
  placeholder: string
  mask?: string|Array<string|RegExp>
  multiple?: boolean
}

export const FilterInput: React.FC<FilterInputProps> = (props: FilterInputProps) => {
  const {
    name,
    className,
    id = name,
    multiple = false,
    mask,
    value,
    placeholder,
    ...elements
  } = props

  const validOptions = {
    alt: elements.alt,
    autoComplete: elements.autoComplete,
    max: elements.max,
    maxLength: elements.maxLength,
    min: elements.min,
    minLength: elements.minLength,
    placeholder,
    required: elements.required
  }

  const classes = classNames(
    className,
    'form-control'
  )

  const attrs = {
    ...validOptions,
    className: classes,
    name: name,
    id: id,
    defaultValue: value
  }

  if (mask) {
    return (
      <div className="form-group">
        {Boolean(placeholder) && <label className="form-label" htmlFor={name}>{placeholder}:</label>}
        <InputMask mask={mask} {...attrs} />
      </div>
    )
  }

  const Tag = multiple ? 'textarea' : 'input'

  return (
    <div className="form-group">
      {Boolean(placeholder) && <label className="form-label" htmlFor={name}>{placeholder}:</label>}
      <Tag {...attrs} />
    </div>
  )
}
