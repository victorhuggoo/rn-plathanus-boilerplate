import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack initialRouteName='SignIn' screenOptions={{ headerShown: true }}>
      <Stack.Screen 
        name='SignIn'
        options={{
          title:'Login',
        }} 
      />
      <Stack.Screen 
        name='SignUp'
        options={{
          title:'Register',
        }} 
      />
    </Stack>
  )
}

export default AuthLayout
