import React from 'react';	
import { TodoContext } from './TodoContext';

function CrearTodoButton({ setTodos, todos }) {

    const { OpenModal, setOpenModal } = React.useContext(TodoContext);

    const addTodo = () => {
        setOpenModal(!OpenModal);
    };

    return (
        <button 
            className="createTodo"
            onClick={(addTodo)}>
            +
        </button>
    );
}

export { CrearTodoButton };