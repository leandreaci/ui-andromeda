import React from 'react'
import { TabList } from './tab-list'
import { Tab } from './tab'
import { useLocation } from 'react-router-dom'
import uriHelper from '../../utils/uri-helper'
import { TabPanel } from './tab-panel'

export type TabsProps = {
  children: {
    type: string | {
      displayName?: string
    },
    props: TabsProps
  }[]
}
export const Tabs: React.FC<TabsProps> = ({ children }: TabsProps) => {
  const [tabList, ...tabPanels] = children
  const history = useLocation()
  const params = uriHelper.parse(history.search)

  const getActive = (tab: number) => {
    const hasTab = params?.tab != null

    if (!hasTab && tab === 0) return true

    return params?.tab === tab.toString()
  }

  const getParams = (tab: number) => {
    return ({
      active: getActive(tab),
      href: uriHelper.stringify({
        ...params,
        ...(params.page && { page: 1 }),
        tab
      })
    })
  }

  return (
    <div className="tabs">
      <TabList>
        {tabList.props.children?.map((child, index) => (
          <Tab
            key={`tab-child-${index}`}
            {...getParams(index)}
          >{child?.props?.children}</Tab>
        ))}
      </TabList>
      {tabPanels.map((child, index) => (
        <TabPanel
          key={`tab-panel-child-${index}`}
          active={getActive(index)}
        >{child?.props?.children}</TabPanel>
      ))}
    </div>
  )
}
