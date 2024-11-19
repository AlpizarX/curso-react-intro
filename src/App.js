import React from 'react';
import './App.css';
import { AppUI } from './AppUI';
import { TodoProvider } from './components/TodoContext';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'La vida es bella', completed: false },
//   { text: 'Cenar', completed: false },
//   { text: 'Dormir', completed: false },
//   { text: 'Despertar', completed: false },
//   { text: 'Desayunar', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');



function App() {
  
  
  return (
    <TodoProvider><AppUI /></TodoProvider>
    
  );
}


export default App;
