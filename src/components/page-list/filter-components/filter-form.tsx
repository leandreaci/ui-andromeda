import React from 'react'
import { useNavigate } from 'react-router-dom'
import uriHelper from '../../../utils/uri-helper'

type Props = {
  children: React.ReactNode
  search?: {
    [key: string]: any
  }
}

export const FilterForm: React.FC<Props> = (props: Props) => {
  const { children, search } = props
  const navigate = useNavigate()

  return (
    <form onSubmit={(e) => {
      e.preventDefault()

      const count: number = (e.target as HTMLFormElement).length
      const fields = e.target
      const whiteList = ['input', 'select', 'textarea']
      const elements = search

      for (let i = 0; i < count; i++) {
        // @ts-ignore
        if (whiteList.includes((fields[i]).localName) && fields[i].name) {
          Object.assign(elements, {
            // @ts-ignore
            [fields[i].name]: fields[i].value
          })
        }
      }
      navigate({
        search: uriHelper.stringify({ ...elements, page: 1 })
      })
    }}>{children}</form>
  )
}
