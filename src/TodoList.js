import React from 'react';
import { StyleSheet, Text, Button, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export const TodoList = ({ title }) => {
    return (
    <TouchableOpacity><Text style={styles.text}>{title}</Text></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
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