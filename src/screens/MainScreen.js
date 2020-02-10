import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { TodoList } from '../components/TodoList';

export const MainScreen = ({ todo, addUse, idSubmit }) => {
    return (
        <View>
        <AddTodo addUse= {addUse} />
          <FlatList
            data = {todo}
            renderItem={( ({ item }) => <TodoList item={item} idSubmit={idSubmit} /> )}
            keyExtractor={item => item.id}
            />
        </View>

    )
}

const styles = StyleSheet.create({})
