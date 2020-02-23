import React, { useReducer, useContext } from 'react'
import { TodoContext } from './todoContext'
import { todoReduser } from './todoReduser'
import { ADD_TOTO, REMOVE_TODO, UPDATE_TODO } from './type'
import { ScreenContext } from './screen/screenContext'
import { Alert } from 'react-native';

export const TodoState = ({ children }) => {
    const screenContext = useContext(ScreenContext)
    const initialState = {
        todos: []
    }
    const [ state, dispatch ] = useReducer(todoReduser,initialState )

    const addTodo = (title) => {
        dispatch({type: ADD_TOTO, title})
        
    }
    const removeTodo =(id)=> {
      const todoRemoove = state.todos.find(t=>t.id==id)
        Alert.alert(
            'Удаление дела',
            `Вы действительно хотите удалить дело ${todoRemoove.title} ?`,
            [
              {
                text: 'Отмена',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => {
                screenContext.changeScreen(null)
                dispatch({type: REMOVE_TODO, id})
              }},
            ],
            {cancelable: false},
          );
        
        
    }
    const updateTodo =(id, title)=> {
        dispatch({type: UPDATE_TODO, id, title})
    }

return ( <TodoContext.Provider value = {{
    todos: state.todos,
    addTodo, removeTodo, updateTodo
}}>{children}</TodoContext.Provider>
)
}
