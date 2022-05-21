import React, { useCallback, useEffect, useState } from 'react'
import ReactSelect, { MultiValue, SingleValue } from 'react-select'
import { FormikProps } from 'formik'
import { OnChangeValue } from 'react-select/dist/declarations/src/types'

type Option = {
  label: string|number
  value: string|number
}

type Props = {
  name: string
  actions: FormikProps<any>
  options?: Option[]
  id?: string
  value?: Option|Option[]
  placeholder?: string
  isDisabled?: boolean
  isLoading?: boolean
  isClearable?: boolean
  isSearchable?: boolean
  isMulti?: boolean
  onChange?: any
}

export default function Select (props: Props) {
  const {
    actions,
    options = [],
    name,
    id = name,
    value = null,
    placeholder,
    isDisabled = false,
    isLoading = false,
    isClearable = false,
    isSearchable = true,
    isMulti = false,
    onChange
  } = props
  const [currValue, setValue] = useState<SingleValue<Option>|MultiValue<Option>>(value)

  useEffect(() => {
    if (value !== currValue) {
      actions.setFieldValue(name, '')
      setValue(null)
    }
  }, [JSON.stringify(options)])

  const handleChange = useCallback((newValue: OnChangeValue<Option, boolean>) => {
    if (onChange) {
      onChange({
        currentTarget: {
          value: newValue,
          name
        }
      })
    }
    actions.setFieldValue(name, JSON.stringify(newValue))
    setValue(newValue)
  }, [])

  return (
    <ReactSelect
      placeholder={placeholder}
      className="form-builder-select"
      classNamePrefix="form-builder"
      options={options}
      name={name}
      id={id}
      defaultValue={currValue}
      value={currValue}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isSearchable={isSearchable}
      isMulti={isMulti}
      onChange={handleChange}
    />
  )
}
