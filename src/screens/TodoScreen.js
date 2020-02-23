import React, { useState, useContext } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { THEME } from '../theme';
import { AppCard } from '../components/UI/AppCard';
import { AddModal } from '../components/UI/AddModal';
import { AppButton } from '../components/UI/AppButton';
import { AntDesign } from '@expo/vector-icons';
import { TodoContext } from '../context/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export const TodoScreen = () => {

    const { removeTodo, updateTodo } = useContext(TodoContext)
    const { changeScreen, todoId } = useContext(ScreenContext)

    const [ modal, setModal ] = useState(false);

    const onSaveTodo =(title)=> {
        updateTodo( todoId.id, title )
        setModal(false)
    }

    return (
        <View>
            <AddModal visible = {modal} Cancel = {()=>setModal(false)}  value = {todoId.title} onSaveTodo = {onSaveTodo} />
            <AppCard>
        <Text style={styles.text}>{todoId.title}</Text>
        <AppButton color='blue' onPress={ ()=> setModal(true) }>
            <AntDesign name = 'pluscircleo' />
        </AppButton>
            </AppCard>
            
        <View style = {styles.container}>
            <View style = {styles.buttons}>
                <AppButton color = "gray" onPress = {()=>changeScreen(null)}>Назад</AppButton>
            </View>
            <View style = {styles.buttons}>
                <Button title = "Удалить" color = {THEME.RED_COLOR} onPress = {() => removeTodo(todoId.id)}/>
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