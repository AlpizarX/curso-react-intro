import React from 'react';
import { TodoContext } from './TodoContext';

function TodoForm() {
    const { addTodo, OpenModal, setOpenModal,  } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    

    function onSubmit(event) {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(!OpenModal);            
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Cortar la cebolla" 
                value={newTodoValue}
                onChange={onChange} 
            />
            <div className="TodoForm-container">
                <button className="TodoForm-button-cancel" onClick={() => setOpenModal(!OpenModal)}>Cancelar</button>
                <button className="TodoForm-button-add" >Agregar</button>
            </div>
        </form>
    );
}

export { TodoForm };