import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { THEME } from '../theme';
import { AppCard } from '../components/UI/AppCard';

export const TodoScreen = ({idSubmit, ntodo, onRemoove}) => {
    return (
        <View>
            <AppCard>
        <Text style={styles.text}>{ntodo.title}</Text>
        <Button title = "Ред"/>
            </AppCard>
            
        <View style = {styles.container}>
            <View style = {styles.buttons}>
                <Button title = "Назад" color = "gray" onPress = {()=>idSubmit(null)}/>
            </View>
            <View style = {styles.buttons}>
                <Button title = "Удалить" color = {THEME.RED_COLOR} onPress = {() => onRemoove(ntodo.id)}/>
                
            </View>    
        </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    buttons: {
        width: '40%'
    },
    text: {
        fontSize: 20
    }
})