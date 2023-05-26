import React from 'react'
import { useRouter } from 'expo-router'
import { Center, Pressable, Text } from 'native-base'

const StepThreeScreen = () => {
  const router = useRouter()

  return (
    <Center flex={1}>
      <Pressable 
        padding={4} 
        bg='emerald.300' 
        borderRadius={100}
        onPress={() => router.push('(auth)/SignIn')}
      >
        <Text fontWeight='bold'>
          Success
        </Text>
      </Pressable>
    </Center>
  )
}

export default StepThreeScreen
