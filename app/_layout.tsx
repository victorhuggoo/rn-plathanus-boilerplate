import React from 'react'
import { SplashScreen, Slot } from 'expo-router'
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter'

import AppProvider from '../contexts/AppProvider'

const RootLayout = () => {
  const [ fontsLoaded ] = useFonts({ Inter_500Medium })
  
  return (
    fontsLoaded ? (
      <AppProvider>
        <Slot/>
      </AppProvider>
    ) : <SplashScreen />
  ) 
} 

export default RootLayout
