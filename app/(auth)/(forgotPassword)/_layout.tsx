import React from 'react'
import { Stack } from 'expo-router'

const ForgotPasswordLayout = () => (
  <Stack 
    initialRouteName='index' 
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name='index' />
  </Stack>
)

export default ForgotPasswordLayout
