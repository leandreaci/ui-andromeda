import React from 'react'
import { Dropdown, DropdownProps } from '../../molecules/dropdown/dropdown'
import { Icon } from '../../atoms/icon'
import { Image, ImageProps } from '../../atoms/image'

export type NavbarProps = {
  image?: ImageProps
  dropdown: DropdownProps
}

export const Navbar = (props: NavbarProps) => {
  const {
    image,
    dropdown
  } = props

  return (
    <div className="navbar mb-3">
      <div className="navbar-profile">
        {image
          ? <Image {...image} circle width="38px" height="38px" objectFit="cover" className="me-2" />
          : (
            <div className="image-profile circle me-2">
              <Icon icon="faUserAlt" />
            </div>
            )}
        <Dropdown {...dropdown} />
      </div>
    </div>
  )
}
