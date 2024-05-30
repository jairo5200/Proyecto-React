import React from 'react'
import { RxCheckCircled } from "react-icons/rx";
import './TodoIcon.css'

function CompleteIcon(props) {
  return (
      <RxCheckCircled 
      className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick={props.onComplete}/>
  )
}

export {CompleteIcon};

 