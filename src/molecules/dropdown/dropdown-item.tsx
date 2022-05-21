import React from 'react'
import { Link } from '../../atoms/link'

interface DropdownItemBaseProps {
  separator?: false
  label: string
  uri: string
  target?: '_self'|'_blank'
  onClick?: any
}

interface DropdownSeparatorProps {
  separator?: true
}

interface DropdownOnClickProps {
  separator?: false
  label: string
  uri?: string
  target?: '_self'|'_blank'
  onClick: () => void
}

export type DropdownItemProps = DropdownItemBaseProps | DropdownSeparatorProps | DropdownOnClickProps

export const DropdownItem: React.FC<DropdownItemProps> = (props: DropdownItemProps) => {
  if (props.separator) return <div className="dropdown-divider" />

  const { uri, label, onClick, ...attrs } = props as DropdownItemBaseProps

  if (onClick) {
    return <div {...attrs} className="dropdown-item" onClick={onClick}>{label}</div>
  }

  return <Link {...attrs} href={uri} className="dropdown-item">{label}</Link>
}
