import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//Crear el context

export const CategoriasContext = createContext();

// Provider donde se encuentran las funciones y el state

const CategoriasProvider = (props) => {
  // Crear el state del context
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const respuesta = await axios.get(url);
      setCategorias(respuesta.data.drinks);
    };

    obtenerCategorias();
  }, []);
  return (
    <CategoriasContext.Provider value={{categorias}}>{props.children}</CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
