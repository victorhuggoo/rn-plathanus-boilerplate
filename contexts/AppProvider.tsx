import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { NativeBaseProvider } from 'native-base'

import { TAppProvider } from '../types/provider'

const AppProvider = ({ children }: TAppProvider) => {
  const router = useRouter()
  const isAuthenticated = true

  useEffect(() => {
    !isAuthenticated 
      ? router.replace('/SignIn')
      : router.replace('(authenticated)/(tabs)/Home')
  }, [])

  return (
    <NativeBaseProvider>
      {children}
    </NativeBaseProvider>
  )
}

export default AppProvider
