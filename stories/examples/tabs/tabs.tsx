import React from 'react'
import { Tab, Tabs, TabsProps, TabList,  TabPanel } from '../../../src'

const Example = (args: TabsProps) => (
  <Tabs {...args}>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
    </TabList>
    <TabPanel>Lorem ipsum.</TabPanel>
    <TabPanel>Lorem ipsum dolor sit amet.</TabPanel>
  </Tabs>
)

export default Example
