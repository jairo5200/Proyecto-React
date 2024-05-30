import React from "react";
import ReactDOM from 'react-dom';
import './Modal.css'

function Modal( {children} ) {
    return (
        <div className="Modal ModalBackground">
            {children}
        </div>,
    document.getElementById('modal')
    );
}


export {Modal};