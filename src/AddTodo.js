import React, {useState} from 'react';
import { StyleSheet, TextInput, Button, View, Alert } from 'react-native';

export const AddTodo = ({addUse, todo}) => {
    
    const [el, setEl] = useState('')

    const onSubmit = () => {
        if(el.trim()) {
            addUse(el);
            setEl('');
        } else {
            Alert.alert('Название дела не может быть пустым');
        }
        
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} onChangeText={ text => setEl(text) } value = {el} />
            <Button style={styles.button} color= '#8fbc8f' title = 'Добавить' onPress={onSubmit}/>
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
      
    }
})