import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const subscriptions = () => {
    return (
        <View className='flex w-screen h-screen items-center justify-center'>
            <Text>subscriptions</Text>
            <Link className="px-4 py-2 bg-white  rounded-xl font-bold capitalize text-muted-foreground" href="/subscriptions/spotify">View Spotify Subscription</Link>
        </View>
    )
}

export default subscriptions