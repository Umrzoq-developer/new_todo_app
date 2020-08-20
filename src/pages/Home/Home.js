import React, {useContext, useState} from 'react';
//styling
import {FormButton, FormDiv, HomeDiv} from "./HomeStyle";
//context
import {todoContext} from "../../context/todoContext";
//components
import CustomInput from "../../components/Input/InputComponent";
//types
import {ADD_TODO, EDIT_TODO} from "../../context/types";
import TodoList from "../../components/todoList/todoList";


const Home = () => {
    const [todo, setTodo] = useState({title: '', id: 0, checked: false});
    const {state, dispatch} = useContext(todoContext);

    const {todos, editTodo, edit} = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.title.length > 0) {
            dispatch({type: ADD_TODO, payload: todo});
            setTodo({...todo, title: '', id: todo.id + 1});
        }
    };

    const handleEdit = (e) => {
        e.preventDefault();
        if (editTodo.title.length>0){
            dispatch({type: EDIT_TODO, payload: editTodo})
        }
    };



    return (
        <HomeDiv>
            <FormDiv onSubmit={edit ? handleEdit : handleSubmit}>
                <CustomInput
                    value={todo.title}
                    handleChange={e => {
                        setTodo({...todo, title: e.target.value})
                    }}
                />
                <FormButton type='submit'>
                    {edit ? 'Edit' : 'Add'}
                </FormButton>
            </FormDiv>
            {/*todo list*/}
            <TodoList todos={todos}/>


        </HomeDiv>
    );
};

export default Home;
