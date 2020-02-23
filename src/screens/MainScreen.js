import React, {useContext} from 'react';
import { StyleSheet, FlatList, View, Image } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { TodoList } from '../components/TodoList';
import { TodoContext } from '../context/todoContext';
import { ScreenContext } from '../context/screen/screenContext';

export const MainScreen = () => {
    const todoContext = useContext(TodoContext)
    const screenContext = useContext(ScreenContext)
    let content = (
          <FlatList
            data = {todoContext.todos}
            renderItem={( ({ item }) => <TodoList item={item} idSubmit={screenContext.changeScreen} /> )}
            keyExtractor={item => item.id}
            />
    )

    if (todoContext.todos.length === 0) {
        content= (
            <View style = {styles.imageContainer}>
            <Image 
            style={styles.image}
            source = {require('../../assets/image.png')}
            resizeMode = 'contain'
            />
            </View>
           )
        
    }
    return (
        <View>
            <AddTodo addUse= {todoContext.addTodo} />
             {content}
        </View>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 200
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
