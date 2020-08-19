import React, {useContext, useState} from 'react';
//styling
import {HomeDiv} from "./HomeStyle";
//context
import {todoContext} from "../../context/todoContext";
//components
import CustomInput from "../../components/Input/InputComponent";
//types
import {ADD_TODO} from "../../context/types";
import TodoList from "../../components/todoList/todoList";


const Home = () => {
    const [todo, setTodo] = useState('');
    const {state, dispatch} = useContext(todoContext);

    const {todos} = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: ADD_TODO, payload: todo});
        setTodo('');
    };


    return (
        <HomeDiv>
            <form onSubmit={handleSubmit}>
                <CustomInput
                    value={todo}
                    handleChange={e => setTodo(e.target.value)}
                />
                <button type='submit'>
                    Add
                </button>

                {/*todo list*/}
                <div>
                    <TodoList todos={todos}/>
                </div>
            </form>


        </HomeDiv>
    );
};

export default Home;
