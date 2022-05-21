import React from 'react'
import { Link } from '../atoms/link'
import { Icon } from '../atoms/icon'

export type BreadcrumbProps = {
  items: {
    uri?: string
    label: string
  }[]
}

export const Breadcrumb: React.FC<BreadcrumbProps> = (props: BreadcrumbProps) => {
  const { items } = props
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <div key={index}>
          {item.uri
            ? <>
              <Link href={item.uri}>{item.label}</Link>
              <Icon icon="faAngleRight" />
            </>
            : <span>{item.label}</span>}

        </div>
      ))}
    </div>
  )
}
