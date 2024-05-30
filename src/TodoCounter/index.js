import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext'


function TodoCounter() {

  const { 
    completedTodos,
    totalTodos, } = React.useContext(TodoContext);

  if (completedTodos === totalTodos) {
    return (
      <div>
        <h1 className="TodoCounter">Has completado todos los TODOS Felicitaciones!!!! 🥳🥳</h1>
      </div>
    )
  }else {
  return (
    <div>
      <h1 className="TodoCounter">Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS</h1>
    </div>
  )
  }
}

export {TodoCounter};
