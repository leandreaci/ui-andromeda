import React from 'react'
import Datepicker from 'react-datepicker'
import dateHelper from '../../../utils/date-helper'

type FilterDatepickerProps = {
  name: string
  id?: string
  value?: string
  placeholder?: string
}

export const FilterDatepicker: React.FC<FilterDatepickerProps> = (props: FilterDatepickerProps) => {
  const {
    name,
    id = name,
    value,
    placeholder
  } = props
  const [date, setDate] = React.useState(dateHelper.stringToDate(value))

  const handleChange = (currentDate: Date) => {
    setDate(currentDate)
  }

  return (
    <div className="form-group">
      {Boolean(placeholder) && <label className="form-label" htmlFor={name}>{placeholder}:</label>}
      <Datepicker
        name={name}
        id={id}
        placeholderText={placeholder}
        selected={date}
        locale="pt_br"
        className="form-control"
        dateFormat="dd/MM/yyyy"
        autoComplete="off"
        onChange={handleChange}
      />
    </div>
  )
}
