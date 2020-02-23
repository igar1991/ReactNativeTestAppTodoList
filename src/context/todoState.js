import React, { useReducer } from 'react'
import { TodoContext } from './todoContext'
import { todoReduser } from './todoReduser'
import { ADD_TOTO, REMOVE_TODO, UPDATE_TODO } from './type'

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [{id: '1', title: 'tttttttttttttt'}]
    }
    const [ state, dispatch ] = useReducer(todoReduser,initialState )

    const addTodo = (title) => {
        dispatch({type: ADD_TOTO, title})
        
    }
    const removeTodo =(id)=> {
        dispatch({type: REMOVE_TODO, id})
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
