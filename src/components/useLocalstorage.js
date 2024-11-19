import React from 'react'

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false); // Asegúrate de que esta línea se ejecuta correctamente
            } catch (error) {
                setError(true);
                setLoading(false); // También debe manejar el caso de error
            }
        }, 2000);
    }, []);


    const saveItem = (item) => {
        try {
            const stringifiedItem = JSON.stringify(item); // Convierte el ítem a una cadena JSON
            localStorage.setItem(itemName, stringifiedItem); // Guarda en localStorage
            setItem(item); // Actualiza el estado React
        } catch (error) {
            console.error("Error saving item to localStorage", error); // Manejo de errores
        }
    }
    console.log({ item, saveItem, loading, error });
    return {
        item,
        saveItem,
        loading,
        error
    }

}

export { useLocalStorage };