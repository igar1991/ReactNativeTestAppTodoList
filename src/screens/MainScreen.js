import React from 'react';
import { StyleSheet, FlatList, View, Image } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { TodoList } from '../components/TodoList';

export const MainScreen = ({ todo, addUse, idSubmit }) => {
    let content = (
          <FlatList
            data = {todo}
            renderItem={( ({ item }) => <TodoList item={item} idSubmit={idSubmit} /> )}
            keyExtractor={item => item.id}
            />
    )

    if (todo.length === 0) {
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
            <AddTodo addUse= {addUse} />
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
