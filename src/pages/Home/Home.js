import React, {useContext, useState} from 'react';
//styling
import {FormButton, FormDiv, HomeDiv} from "./HomeStyle";
//context
import {todoContext} from "../../context/todoContext";
//components
import CustomInput from "../../components/Input/InputComponent";
//types
import {ADD_TODO} from "../../context/types";
import TodoList from "../../components/todoList/todoList";


const Home = () => {
    const [checked, setChecked] = useState(false);
    const [todo, setTodo] = useState({title: '', id: 0, checked: false});
    const {state, dispatch} = useContext(todoContext);

    const {todos} = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.title.length > 0) {
            dispatch({type: ADD_TODO, payload: todo});
            setTodo({...todo, title: '', id: todo.id + 1});
        }
    };

    const handleChecked = ({ target: { checked } }) => {
        setChecked(checked);
    };


    return (
        <HomeDiv>
            <FormDiv onSubmit={handleSubmit}>
                <CustomInput
                    value={todo.title}
                    handleChange={e => {
                        setTodo({...todo, title: e.target.value})
                    }}
                />
                <FormButton type='submit'>
                    Add
                </FormButton>
            </FormDiv>
            {/*todo list*/}
            <TodoList
                todos={todos}
                checked={checked}
                handleChecked={handleChecked}
            />


        </HomeDiv>
    );
};

export default Home;
