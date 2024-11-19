import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CrearTodoButton } from './components/CrearTodoButton';
import { TodoContext } from './components/TodoContext';
import { Modal } from './components/Modal';
import { TodoForm } from './components/TodoForm';
import './App.css';

function AppUI() {

    const { OpenModal, setOpenModal } = React.useContext(TodoContext);

    return(
    <>
    {/* <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
    <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
    /> */}
    <TodoCounter />
    <TodoSearch />
    <TodoContext.Consumer>
        {({ searchedTodos, completeTodo, deleteTodo }) => (
            <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
        )}
    </TodoContext.Consumer>
    
    <CrearTodoButton
        // setTodos={saveTodos}
        // todos={todos}
    />

    {OpenModal && (
        <Modal>
            <TodoForm />
        </Modal> 
    )}
    </>
    )
}

export { AppUI };