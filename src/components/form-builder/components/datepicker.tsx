import React from 'react'
import DateP, { registerLocale } from 'react-datepicker'
import ptBr from 'date-fns/locale/pt-BR'
import { FormikProps } from 'formik'
import dateHelper from '../../../utils/date-helper'

type Props = {
  name: string
  actions: FormikProps<any>
  value?: string
}

registerLocale('pt_br', ptBr)

// example use https://reactdatepicker.com
export default function DatePicker (props: Props) {
  const {
    name,
    actions,
    value
  } = props
  const [date, setDate] = React.useState(dateHelper.stringToDate(value))

  const handleDateSelect = (currentDate: Date) => {
    if (actions.setFieldValue) {
      actions.setFieldValue(name, dateHelper.dateToString(currentDate))
      setDate(currentDate)
    }
  }

  return (
    <DateP
      locale="pt_br"
      className="form-control"
      selected={date}
      onChange={handleDateSelect}
      dateFormat="dd/MM/yyyy"
    />
  )
}
