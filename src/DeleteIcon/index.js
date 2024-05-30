import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import './TodoIcon.css'


function DeleteIcon({ onClick }) {
  return (
    <span 
        className='span-icon-close Icon-delete'
        onClick={onClick}
    >
        <AiOutlineCloseCircle />

    </span>
  )
}

export {DeleteIcon};
