import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const AppButton = ({children, onPress, color})=> {
return (
    <TouchableOpacity onPress = {onPress}>
        <View style={{...styles.button, backgroundColor: color}}>
            <Text>{children}</Text>
        </View>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center'

    }
})