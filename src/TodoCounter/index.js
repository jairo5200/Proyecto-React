import React from 'react'
import './TodoCounter.css'


function TodoCounter({ total, completed }) {
  if (completed === total) {
    return (
      <div>
        <h1 className="TodoCounter">Has completado todos los TODOS Felicitaciones!!!! 🥳🥳</h1>
      </div>
    )
  }else {
  return (
    <div>
      <h1 className="TodoCounter">Has completado <span>{completed}</span> de <span>{total}</span> TODOS</h1>
    </div>
  )
  }
}

export {TodoCounter};
