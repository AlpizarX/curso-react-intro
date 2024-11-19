import React from "react";
import { TodoContext } from './TodoContext';

function TodoSearch() {

    const { setSearchValue, searchValue } = React.useContext(TodoContext);

    return (
        <input 
            placeholder="Cebolla" 
            className="TodoSearch"
            value={searchValue}
            onChange={event => {
                setSearchValue(event.target.value);
            }}


        />
    );
}

export { TodoSearch};