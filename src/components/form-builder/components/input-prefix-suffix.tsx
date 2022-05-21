import React from 'react'
import { FastField } from 'formik'

type Props = {
  attrs: {
    [key: string]: any
  }
  prefix?: string
  suffix?: string
}

export const InputPrefixSuffix = ({ attrs, suffix, prefix }: Props) => {
  return (
    <div className="position-relative">
      {prefix && <div className="input-prefix">{prefix}</div>}
      <FastField
        {...attrs}
        readOnly
        onFocus={(event: React.FormEvent<HTMLInputElement>) => {
          event.currentTarget.readOnly = false
        }}
        {...(prefix && {
          style: {
            paddingLeft: ((prefix?.length ?? 0) * 8) + 10
          }
        })}
      />
      {suffix && <div className="input-suffix">{suffix}</div>}
    </div>
  )
}
