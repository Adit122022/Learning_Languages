import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const SignUp = () => {
    return (
        <View className='bg-background min-h-screen min-w-screen'>

            <Text className='text-center font-mono text-2xl text-foreground font-bold'> Sign Up</Text>
            <Link className='px-2 py-4 bg-foreground  text-muted' href="/">SignIn</Link>
        </View>
    )
}

export default SignUp