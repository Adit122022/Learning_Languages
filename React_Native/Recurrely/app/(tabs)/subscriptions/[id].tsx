import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const SubscriptionDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <View className='flex w-screen h-screen items-center justify-center'>
            <Text>SubscriptionDetails : {id}</Text>
            <Link className="px-4 py-2 bg-white  rounded-xl font-bold capitalize text-muted-foreground" href="/">Go Back</Link>
        </View>
    )
}

export default SubscriptionDetails