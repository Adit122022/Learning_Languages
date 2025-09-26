import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const settings = () => {
    return (
        <View
            style={styles.container}
        >
            <Text style={styles.content}>Settings </Text>
            <Text style={styles.paragraph}>Here i can show settings</Text>
            <Link style={styles.link} href="/(tabs)">
            <Ionicons size={25} name='home'/>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        height: "100%",
        backgroundColor:"#fefae0",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {

        fontSize: 25,
        fontWeight: "bold"
    },
    link: {
        borderColor: "black",
        fontSize: 20,
        color: "#696FC7",
        marginTop: 20,

    },
    paragraph: {
        fontSize: 15,
        marginTop: 10
    }

})

export default settings