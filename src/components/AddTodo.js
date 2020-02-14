import React, {useState} from 'react';
import { StyleSheet, TextInput, Button, View, Alert, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const AddTodo = ({addUse}) => {
    
    const [el, setEl] = useState('')

    const onSubmit = () => {
        if(el.trim()) {
            addUse(el);
            setEl('');
            Keyboard.dismiss()
        } else {
            Alert.alert('Название дела не может быть пустым');
        }
        
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} onChangeText={ text => setEl(text) } value = {el} />
            <AntDesign.Button style={styles.button} onPress={onSubmit} name = "pluscircleo">Добавить</AntDesign.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'     
    },
    textInput: {
        width: '65%',
        borderBottomColor: "#8fbc8f",
        borderBottomWidth: 3,
        padding: 5

    },
    button: {
        backgroundColor: '#8fbc8f'
    }
})