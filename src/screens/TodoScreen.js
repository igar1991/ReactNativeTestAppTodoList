import React, { useState } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { THEME } from '../theme';
import { AppCard } from '../components/UI/AppCard';
import { AddModal } from '../components/UI/AddModal';
import { AppButton } from '../components/UI/AppButton';
import { AntDesign } from '@expo/vector-icons';

export const TodoScreen = ({ idSubmit, ntodo, onRemoove, changeTodo }) => {

    const [ modal, setModal ] = useState(false);

    const onSaveTodo =(title)=> {
        changeTodo( ntodo.id, title )
        setModal(false)
    }

    return (
        <View>
            <AddModal visible = {modal} Cancel = {()=>setModal(false)}  value = {ntodo.title} onSaveTodo = {onSaveTodo} />
            <AppCard>
        <Text style={styles.text}>{ntodo.title}</Text>
        <AppButton color='blue' onPress={ ()=> setModal(true) }>
            <AntDesign name = 'pluscircleo' />
        </AppButton>
            </AppCard>
            
        <View style = {styles.container}>
            <View style = {styles.buttons}>
                <AppButton color = "gray" onPress = {()=>idSubmit(null)}>Назад</AppButton>
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