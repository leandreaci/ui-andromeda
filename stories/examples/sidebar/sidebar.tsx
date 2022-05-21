import React from 'react'
import { SideNavigationBar, SideNavigationBarProps } from '../../../src'

const Example = (args: SideNavigationBarProps) => (
  <SideNavigationBar
    {...args}
    logoThumb="W"
    logoName="Wizeo"
    logout={
      {
        href: '/logout',
        label: 'Sair'
      }
    }
    items={[
      {
        icon: 'fa-th',
        href: '#',
        label: 'Dashboard'
      },
      {
        icon: 'fa-car-alt',
        href: '#',
        label: 'Vehicle'
      }
    ]}
  />
)

export default Example
