import React, {useState} from 'react';
import { StyleSheet, Button, View, Modal, TextInput } from 'react-native';
import { THEME } from '../../theme';

export const AddModal = ({ visible, Cancel, value, onSaveTodo }) => {

    const [title, setTitle] = useState(value)

    const noSave = ()=> {
        setTitle(value);
        Cancel();
    }

    const changeTodo =()=> {
        onSaveTodo(title)
    }

    return (
        <Modal
        visible={visible}
        animationType="slide"
        >
            <View style = {styles.container}>
                <TextInput 
                style = {styles.input} 
                placeholder='Введите изменения'
                value={title}
                onChangeText={setTitle}
                />
                <View style = {styles.buttons}>
                <Button title = 'Отмена' onPress = {noSave} color = 'red' />
                <Button title = 'Сохранить' onPress = {changeTodo} />
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    
    buttons: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-around"
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.BACKGROUND,
        borderBottomWidth: 3,
        width: '80%',
        marginBottom: 20

    }
})
