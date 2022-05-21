import React from 'react'
import { Icon } from '../../atoms/icon'
import { Link, LinkProps } from '../../index'

export type SideNavigationBarItemProps = LinkProps & {
  icon?: string
  label: string
}

const InnerItem: React.FC<SideNavigationBarItemProps> = ({ icon, label }: SideNavigationBarItemProps) => {
  return (
    <>
      {icon && <Icon icon={icon} />}
      <span className="link-name">{label}</span>
    </>
  )
}

export const SideNavigationBarItem: React.FC<SideNavigationBarItemProps> = (props: SideNavigationBarItemProps) => {
  const {
    className = '',
    label,
    ...attrs
  } = props

  return (
    <li className={className}>
      <Link {...attrs}>
        <InnerItem {...props} />
      </Link>
      <span className="tooltip">{label}</span>
    </li>
  )
}
