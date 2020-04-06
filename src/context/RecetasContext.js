import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, setRecetas] = useState([]);

  const [consultaAPI, setConsultaAPI] = useState(false);

  const [busqueda, buscarRecetas] = useState({
    ingrediente: "",
    categoria: "",
  });

  const { ingrediente, categoria } = busqueda;
  useEffect(() => {
    const obtenerRecetas = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;
      const respuesta = await axios.get(url);
      setRecetas(respuesta.data.drinks);
    };

    if (consultaAPI) obtenerRecetas();
  }, [busqueda]);
  return (
    <RecetasContext.Provider
      value={{
        recetas,
        buscarRecetas,
        setConsultaAPI,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
