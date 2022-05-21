import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import * as fab from '@fortawesome/free-brands-svg-icons'
import * as fa from '@fortawesome/free-solid-svg-icons'
import stringHelper from '../utils/string-helper'
import React from 'react'

export type IconProps = {
  icon: string
  brand?: boolean
  className?: string
}

export const Icon = ({ icon, brand, className = '' }: IconProps) => {
  const sanitize = stringHelper.toCamelCase(icon)
  const ico = brand ? fab[sanitize as keyof typeof fab] : fa[sanitize as keyof typeof fa]

  return <FontAwesomeIcon icon={ico as IconProp} className={className} />
}
