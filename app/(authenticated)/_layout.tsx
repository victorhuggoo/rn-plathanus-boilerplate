import React from 'react'
import { Drawer } from 'expo-router/drawer'

import DrawerHeader from '../components/DrawerHeader'
import CustomDrawerContent from '../components/CustomDrawer'

const AuthenticatedRoutes = () => {
  return (
    <Drawer
      initialRouteName='(tabs)'
      useLegacyImplementation={true}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          header: (props) => <DrawerHeader {...props} title="Settings" />,
        }}
      />
    </Drawer>
  )
}

export default AuthenticatedRoutes
