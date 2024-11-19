import React from "react";
import { useLocalStorage } from "./useLocalstorage.js";
const TodoContext = React.createContext();

function TodoProvider({children}) {

    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

    console.log("Loading:", loading); // Depuración para confirmar que loading existe
    console.log("Todos:", todos);


    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = Array.isArray(todos) ? todos.filter(todo => {
        const textTodo = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return textTodo.includes(searchText);
    }) : [];

    console.log('searchedTodos', searchedTodos);

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex(todo => todo.text === text);
        newTodos[index].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex(todo => todo.text === text);
        newTodos.splice(index, 1);
        saveTodos(newTodos);
    }

    const [OpenModal, setOpenModal] = React.useState(false);

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={
            {
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                addTodo,
                OpenModal,
                setOpenModal,
                loading,
                error
            }
        }>
            {children}
        </TodoContext.Provider>
    );
    
}


export { TodoContext, TodoProvider };