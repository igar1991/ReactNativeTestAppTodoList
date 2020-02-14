import React, { useReducer } from 'react'
import { TodoContext } from './todoContext'
import { todoReduser } from './todoReduser'

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [{id: '1', title: 'tttttttttttttt'}]
    }
    const [ state, dispatch ] = useReducer(todoReduser,initialState )

return ( <TodoContext.Provider value = {{
    todos: state.todos
}}>{children}</TodoContext.Provider>
)
}
