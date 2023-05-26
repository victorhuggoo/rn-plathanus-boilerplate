import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router'

const StepOneScreen = () => {
  const router = useRouter()

  return (
    <View>
      <Text>Hello StepOne</Text>
      <Pressable
        onPress={() => router.push('/StepTwo')}
        style={{ 
          width: 120, 
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red', 
        }}>
        <Text>Go to StepTwo</Text>
      </Pressable>
    </View>
  )
}

export default StepOneScreen
