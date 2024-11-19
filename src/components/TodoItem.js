import {  CompleteIcon } from "./CompleteIcon";
import {  DeleteIcon } from "./DeleteIcon";

function TodoItem({ text, completed, onComplete, onDelete }) {
    

    return (
        <li className="ToDo-item">

            <CompleteIcon onComplete={onComplete}  completed={completed}/>
            <p onClick={onComplete}>{text}</p>
            <DeleteIcon onDelete={onDelete} />

        </li>
    );
}


export { TodoItem };