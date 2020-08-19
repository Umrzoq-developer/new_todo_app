import React from "react";
//styling
import {CheckBox, DeleteIcon, EditIcon, TodoItemDiv, TodoText} from "./todoItemStyle";

const TodoItem = ({todo, checked, handleChecked, handleDelete}) => {
    return(
        <TodoItemDiv>
            <CheckBox
                type="checkbox"
                checked={checked}
                onChange={handleChecked}
            />
            <TodoText>
                {todo}
            </TodoText>
            <EditIcon type='button'>
                Edit &#9998;
            </EditIcon>
            <DeleteIcon type='button' onClick={handleDelete}>
                Delete &#10006;
            </DeleteIcon>
        </TodoItemDiv>
    )
};

export default TodoItem;
