import React, {useContext, useState} from "react";
//components
import TodoItem from "../todoItem/todoItem";
//context
import {todoContext} from "../../context/todoContext";
import {CHECKED, DELETE_TODO} from "../../context/types";
//styling
import {TodoListDiv} from "./todoListStyle";


const TodoList = ({todos}) => {
    const [doneTodos, setDoneTodos] = useState([]);
    const {state, dispatch} = useContext(todoContext);
    const {checked} = state;
    console.log(todos);

    // console.log(todos);
    return (
        <TodoListDiv>
            {
                todos.length > 0 ?
                    todos.map((item, id) => {
                        return (
                            <TodoItem
                                key={id}
                                todo={item}
                                checked={checked}
                                handleDelete={() => {
                                    dispatch({type: DELETE_TODO, payload: id})
                                }}
                                handleChecked={() => {
                                    dispatch({type: CHECKED, payload: id});
                                    setDoneTodos([...doneTodos, todos[id]]);
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
