import React from 'react';
import { StyleSheet, Text,TouchableOpacity } from 'react-native';

export const TodoList = ({ item, idSubmit }) => {
    return (
    <TouchableOpacity
    onPress = {()=> idSubmit(item)}
    >
        <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'roboto-regular',
        fontSize: 20,
        borderColor: '#8fbc8f',
        borderWidth: 1,
        backgroundColor: '#fffaf0',
        marginTop: 10,
        padding: 5,
        textAlign: 'center'
    },
    container: {
      
    }
})