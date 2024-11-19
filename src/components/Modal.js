import React from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "./TodoContext";

function Modal({children}) {
    const { OpenModal, setOpenModal } = React.useContext(TodoContext);
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            <div className="ModalContainer">
                {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
    
}
export { Modal };