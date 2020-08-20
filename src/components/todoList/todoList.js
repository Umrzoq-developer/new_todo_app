import React, {useContext} from "react";
//components
import TodoItem from "../todoItem/todoItem";
//context
import {todoContext} from "../../context/todoContext";
import {CHECKED, DELETE_TODO, EDIT_TODO} from "../../context/types";
//styling
import {TodoListDiv} from "./todoListStyle";


const TodoList = ({todos}) => {
    const {state, dispatch} = useContext(todoContext);

    const {checked} = state;
    // console.log(todos);
    return (
        <TodoListDiv>
            {
                todos.length > 0 ?
                    todos.map(item => {
                        return (
                            <TodoItem
                                key={item.id}
                                todo={item}
                                id={item.id}
                                checked={checked}
                                handleDelete={() => {
                                    dispatch({type: DELETE_TODO, payload: item.id})
                                }}
                                handleEdit={() => {
                                    dispatch({type: EDIT_TODO, payload: item.id})
                                }}
                                handleChecked={(e) => {
                                    dispatch({CHECKED, payload: e.target.checked})
                                }}
                            />
                        )
                    })
                    : <h2>There is not any todo yet</h2>
            }
        </TodoListDiv>
    )
};

export default TodoList;
