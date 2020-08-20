import React from "react";
//styling
import {CheckBox, DeleteIcon, EditIcon, TodoItemDiv, TodoText} from "./todoItemStyle";

const TodoItem = ({todo, checked, handleChecked, handleDelete}) => {
    return(
        <TodoItemDiv>
            <CheckBox
                type="checkbox"
                id={todo.id}
                checked={checked}
                onChange={handleChecked}
            />
            <TodoText>
                {todo.title}
            </TodoText>
            <EditIcon>
                Edit &#9998;
            </EditIcon>
            <DeleteIcon onClick={handleDelete}>
                Delete &#10006;
            </DeleteIcon>
        </TodoItemDiv>
    )
};

export default TodoItem;
