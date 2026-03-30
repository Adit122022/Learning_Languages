
import { Button } from '@react-navigation/elements'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Onboarding = () => {
    return (
        <View className='bg-background min-h-screen min-w-screen'>

            <Text className='text-center font-mono text-2xl text-foreground font-bold'> OnBoarding Screen</Text>
            <Button className='px-2 py-4 flex justify-center items-center bg-foreground  text-muted' onPress={() => router.push("/(auth)/SignIn")}>SignIn</Button>
        </View>
        )
}

export default Onboarding