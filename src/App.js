import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
   {text: 'Encender redulador', completed: true},
   {text: 'Encender la cpu', completed: false},
   {text: 'Colocar contraseña', completed: true},
   {text: 'Abrir VSC', completed: false},
];



function App() {
  return (
    <>

      <TodoCounter completed={16} total={25} />

      <TodoSearch/>

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text}
          completed={todo.completed}/>
        ))}
      </TodoList>
    
      <CreateTodoButton/>
    </>
  );
}






export default App;
