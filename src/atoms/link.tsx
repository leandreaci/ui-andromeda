import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { validationsHelper } from '../index'

export type LinkProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {}

export const Link: React.FC<LinkProps> = (props: LinkProps) => {
  const { href = '', children, target, ...attrs } = props

  const validOptions = {
    className: attrs.className,
    title: attrs.title,
    download: attrs.download
  }

  const isLink = validationsHelper.isUrl(href)

  if (isLink) {
    return (
      <a {...validOptions} href={href} target={target || '_blank'} rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <RouterLink {...validOptions} to={href} target={target || '_self'}>
      {children}
    </RouterLink>
  )
}
