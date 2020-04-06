import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);

  const { buscarRecetas, setConsultaAPI } = useContext(RecetasContext);

  const [busqueda, setBusqueda] = useState({
    ingrediente: "",
    categoria: "",
  });

  const obtenerDatosFormulario = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        buscarRecetas(busqueda);
        setConsultaAPI(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría o ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="ingrediente"
            className="form-control"
            type="text"
            placeholder="Buscar por ingrediente"
            onChange={obtenerDatosFormulario}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="categoria"
            onChange={obtenerDatosFormulario}
          >
            <option value="">--- Selecciona catergoría--</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            value="Buscar bebidas"
            className="btn btn-block btn-primary"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
