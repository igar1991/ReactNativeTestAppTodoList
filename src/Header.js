import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: "#8fbc8f",
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})