import React, {createContext, useReducer} from "react";
import {ADD_TODO, CHECKED, DELETE_TODO, EDIT_TODO} from "./types";


export const todoContext = createContext(null);

const initialState = {
    todos: [],
    editTodo: null,
    edit: false,
    doneTodos: [],
    checked: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case EDIT_TODO:
            return {
                ...state,
                editTodo: state.todos.find(todo => todo.id === action.payload),
                todos: [...state.todos, {id: action.payload.id, title: action.payload.title, checked: action.payload.checked}],
                edit: !state.edit
            };
        case CHECKED:
            return {
                ...state,
                checked: state.todos.find(todo => todo.id === action.payload && state.checked),
                doneTodos: [...state.doneTodos, state.todos.find(todo => todo.id === action.payload)],
            };
        default:
            return state
    }
};



const TodoProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    return(
        <todoContext.Provider value={{state, dispatch}}>
            {props.children}
        </todoContext.Provider>
    )
};


export default TodoProvider;
