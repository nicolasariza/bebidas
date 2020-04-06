import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  //State del provider

  const [idReceta, setIdReceta] = useState(null);

  const [infoReceta, setReceta] = useState({});

  // una vez que tengamos una receta llamar la api
  useEffect(() => {
    const obtenerReceta = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const resultado = await Axios.get(url);

      setReceta(resultado.data.drinks[0]);
    };
    if (idReceta) obtenerReceta();
  }, [idReceta]);
  return (
    <ModalContext.Provider
      value={{
        infoReceta,
        setIdReceta,
        setReceta,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
