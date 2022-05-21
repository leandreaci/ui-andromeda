import React from 'react'
import classNames from 'classnames'

type ThAttributes = {
  className?: string
  align?: 'left' | 'center' | 'right' | 'justify' | 'char' | undefined
  colSpan?: number | undefined
  headers?: string | undefined
  rowSpan?: number | undefined
  scope?: string | undefined
  abbr?: string | undefined
}

type TdAttributes = ThAttributes & {
  height?: number | string | undefined
  width?: number | string | undefined
  valign?: 'top' | 'middle' | 'bottom' | 'baseline' | undefined
}

export type TableProps = {
  nowrap?: boolean
  attributes?: {
    thead?: {
      th?: ThAttributes
    }
    tbody?: {
      td?: TdAttributes
    }
  },
  header?: string[],
  headerArgs?: {
    title: string
    attributes?: {
      th?: ThAttributes
    }
  }[]
  body?: {
    attributes?: {
      td?: TdAttributes
    }
    [key: string]: any
  }[],
  children?: React.ReactNode
}

export const Table: React.FC<TableProps> = ({ nowrap, attributes, header = [], headerArgs = [], body, children }: TableProps) => {
  const headers = header.length ? header.map(head => ({ title: head, attributes: null })) : headerArgs

  const render = (value: any) => {
    if (!(value.attributes)) return value

    return value.value
  }

  const handleClass = (args1?: TdAttributes, args2?: TdAttributes, args3?: TdAttributes) => {
    return classNames(
      nowrap && 'flex-nowrap',
      args1?.className,
      args2?.className,
      args3?.className
    )
  }

  return (
    <table className="table table-striped table-hover">
      {!!header && (
        <thead>
          <tr>
            {headers.map((head, index) => (
              <th
                key={`th-${index}`}
                scope="col"
                {...{ ...attributes?.thead?.th, ...head.attributes?.th }}
                className={handleClass(attributes?.thead?.th, head.attributes?.th)}
              >{head.title}</th>
            ))}
          </tr>
        </thead>
      )}
      {!!body && !children && (
        <tbody>
          {body.map(({ attributes: attrs = null, ...item }, index) => (
            <tr key={`tr-${index}`}>
              {Object.keys(item).map((key, idx) => (
                <td
                  key={`td-${index}-${idx}`}
                  scope="row"
                  {...{
                    ...attributes?.tbody?.td,
                    ...attrs?.td,
                    ...item[key]?.attributes?.td
                  }}
                  className={handleClass(attributes?.tbody?.td, attrs?.td, item[key]?.attributes?.td)}
                >
                  {render(item[key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      )}

      {children && !body && (
        <tbody>
          {children}
        </tbody>
      )}
     </table>
  )
}
