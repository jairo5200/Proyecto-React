import React from "react";


function useLocalStorage(itemName, initialValue) {
  
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

    React.useEffect(() => {
    setTimeout(() => {try {
      const localStorageItem = localStorage.getItem(itemName);
  
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      }else{
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }},5000);   
    },[]);
    
  

  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {
      item, 
      saveItem,
      loading,
      error,
    };
  
  
  }


  export {useLocalStorage};




  // localStorage.removeItem('TODOS_V1');


// const defaultTodos = [
//    {text: 'Encender redulador', completed: true},
//    {text: 'Encender la cpu', completed: false},
//    {text: 'Colocar contraseña', completed: true},
//    {text: 'Abrir VSC', completed: false},
// ];

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));