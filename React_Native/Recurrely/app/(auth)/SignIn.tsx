import { Button } from '@react-navigation/elements'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const SignIn = () => {
  return (
    <View className='bg-background min-h-screen min-w-screen'>

      <Text className='text-center font-mono text-2xl text-foreground font-bold'> Sign In</Text>
      <Button className='px-2 py-4 flex justify-center items-center bg-foreground  text-muted' onPress={() => router.push("/(auth)/SignUp")}>SignUp</Button>
    </View>
  )
}

export default SignIn