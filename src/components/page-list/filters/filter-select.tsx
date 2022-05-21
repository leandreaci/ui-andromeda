import React from 'react'
import ReactSelect from 'react-select'

type Option = {
  label: string|number
  value: string|number
}

type ValueProp = string|Option|Option[]|undefined

type FilterSelectProps = {
  name: string
  placeholder: string
  options?: Option[]
  id?: string
  value?: string|Option|Option[]
  isDisabled?: boolean
  isLoading?: boolean
  isClearable?: boolean
  isSearchable?: boolean
  isMulti?: boolean
}

const getValueInOption = (options: Option[], value: string) => {
  return options.find(({ value: currValue }) => typeof currValue === 'number'
    ? currValue === Number(value)
    : currValue === value)
}

const getValue = (value: string|Option|Option[], options: Option[]): ValueProp => {
  if (!value) return undefined

  const isArray = typeof value === 'object' && Array.isArray(value)
  const isObject = !isArray && typeof value === 'object'

  if (!isObject && !isObject) {
    return getValueInOption(options, (value).toString())
  }
  if (isArray) {
    const selected: Option[]|undefined = []
    value.forEach(val => {
      const data = getValueInOption(options, (val.value).toString())
      if (data) selected.push(data)
    })
    return selected
  }

  return getValueInOption(options, (value.value).toString())
}

export const FilterSelect: React.FC<FilterSelectProps> = (props: FilterSelectProps) => {
  const {
    options = [],
    name,
    id = name,
    value = undefined,
    placeholder,
    isDisabled = false,
    isLoading = false,
    isClearable = false,
    isSearchable = true,
    isMulti = false
  } = props

  const newValue = getValue(value!, options)

  return (
    <div className="form-group">
      {Boolean(placeholder) && <label className="form-label" htmlFor={name}>{placeholder}:</label>}
      <ReactSelect
        placeholder={placeholder}
        className="form-builder-select"
        classNamePrefix="form-builder"
        options={options}
        name={name}
        id={id}
        defaultValue={newValue}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isSearchable={isSearchable}
        isMulti={isMulti}
      />
    </div>
  )
}
