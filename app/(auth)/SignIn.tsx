import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router'

const SignInScreen = () => {
  const router = useRouter()

  return (
    <View>
      <Text>Hello SignIn</Text>
      <Pressable onPress={() => router.push('SignUp')}>
        <Text>Go to Sign Up</Text>
      </Pressable>
      <Pressable onPress={() => router.push('(forgotPassword)')}>
        <Text>Go to Forgot Password</Text>
      </Pressable>
    </View>
  )
}

export default SignInScreen
