import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router'

const StepTwoScreen = () => {
  const router = useRouter()

  return (
    <View>
      <Text>Hello StepTwo</Text>
      <Pressable
        onPress={() => router.push('StepThree')}
        style={{ 
          width: 120, 
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red', 
        }} >
        <Text>Go to StepThree</Text>
      </Pressable>
    </View>
  )
}

export default StepTwoScreen
