import React from 'react'

export type FieldProps = {
  label: string
  value?: string|number|Date
}

export const Field: React.FC<FieldProps> = ({ value, label }: FieldProps) => {
  return (
    <div className="form-group">
      <div className="form-label bold">{label}</div>
      {Boolean(value) && <div className="mb-3">{value}</div>}
    </div>
  )
}
