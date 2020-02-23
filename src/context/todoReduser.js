import { ADD_TOTO, UPDATE_TODO, REMOVE_TODO } from "./type"

export const todoReduser = (state, action)=> {

    switch(action.type) {
        case ADD_TOTO: return {
            ...state, todos: [
                ...state.todos, {
                    id: Date.now().toString(),
                    title: action.title
                }
            ]
        }
        case REMOVE_TODO: return {
            ...state, todos: state.todos.filter(todo=> todo.id !== action.id)
        }
        case UPDATE_TODO: return {
            ...state, todos: state.todos.map(todo => {
                if (todo.id === action.id) {
                    todo.title = action.title
                }
                return todo
            })
        }
        default: return state
    }
}