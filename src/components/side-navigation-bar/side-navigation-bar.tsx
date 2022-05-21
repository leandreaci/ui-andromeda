import React, { memo, useEffect } from 'react'
import { SideNavigationBarItem, SideNavigationBarItemProps } from './side-navigation-bar-item'
import { Icon } from '../../atoms/icon'
import { storageHelper } from '../../index'

export type SideNavigationBarProps = {
  logoThumb?: React.ReactNode
  logoName?: string
  logout?: {
    href: string
    label?: string
  }
  items: SideNavigationBarItemProps[]
  active: boolean
}

const STORAGE_NAME = 'SIDEBAR_ACTIVE'

export const SideNavigationBar = memo((props: SideNavigationBarProps) => {
  const {
    logoThumb,
    logoName,
    logout,
    items = [],
    active = true
  } = props
  const activeStorage = storageHelper.get(STORAGE_NAME)
  const showActive = activeStorage ? activeStorage === '1' : active

  storageHelper.set(STORAGE_NAME, showActive ? '1' : '0')

  useEffect(() => {
    const btn = document.querySelector('.btn-sidebar')! as HTMLButtonElement
    const sidebar = document.querySelector('.sidebar')!

    btn.onclick = function () {
      storageHelper.set(STORAGE_NAME, storageHelper.get(STORAGE_NAME) !== '1' ? '1' : '0')
      sidebar.classList.toggle('active')
    }
  }, [])

  return (
    <div className={`sidebar${showActive ? ' active' : ''}`}>
      <div className="logo-content">
        <div className="logo">
          {Boolean(logoThumb) && <div className="logo-thumb">{logoThumb}</div>}
          {logoName && <div className="logo-name">{logoName}</div>}
        </div>
        <Icon icon="fa-bars" className="btn-sidebar"/>
      </div>
      <ul className="nav-list">
        {items.map((item, index) => (
          <SideNavigationBarItem key={`side-navigation-bar-item-${index}`} {...item} />
        ))}
        {!!logout?.href && (
          <SideNavigationBarItem {...{
            className: 'link-logout',
            icon: 'fa-sign-out-alt',
            label: logout.label || 'Logout',
            href: logout.href
          }} />
        )}
      </ul>
    </div>
  )
})

SideNavigationBar.displayName = 'SideNavigationBar'
