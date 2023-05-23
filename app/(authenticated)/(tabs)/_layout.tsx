import React from 'react'
import { Tabs } from 'expo-router'

import TabsHeader from '../../components/TabsHeader'

const TabsLayout = () => <Tabs screenOptions={{ header: () => <TabsHeader/> }} />
export default TabsLayout
