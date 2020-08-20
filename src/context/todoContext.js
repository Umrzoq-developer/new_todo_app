import React, {createContext, useReducer} from "react";
import {ADD_TODO, CHECKED, DELETE_TODO, EDIT_TODO} from "./types";


export const todoContext = createContext(null);

const initialState = {
    todos: [],
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
                ...state
            };
        case CHECKED:
            return {
                ...state,
                checked: state.todos.find(todo => todo.id === action.payload && action.payload),
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
