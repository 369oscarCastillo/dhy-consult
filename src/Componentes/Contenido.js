import React from "react";
import "../Hojas-de-estilo/Contenido.css";

function Contenido(props) {
  return (
    <div className="contenedor-texto-contenido">
      <p className="tema-contenido">
        <strong>{props.tema}</strong>
      </p>
      <p className="texto-contenido">
        {props.testimonio1} <strong>{props.testimonio2}</strong>{" "}
        {props.testimonio3}
      </p>
    </div>
  );
}
export default Contenido;


export function Imagencont(props) {
  return (
    <div className="contenedor-imagen">
      <img
        className="imagencont-subcontenido"
        src={require(`../imagenes/img-${props.imagen1}.jpg`)}
        alt="Foto"
      />
      <img
        className="imagencont-subcontenido"
        src={require(`../imagenes/img-${props.imagen2}.jpg`)}
        alt="Foto"
      />
      <img
        className="imagencont-subcontenido"
        src={require(`../imagenes/img-${props.imagen3}.jpg`)}
        alt="Foto"
      />
      <img
        className="imagencont-subcontenido"
        src={require(`../imagenes/img-${props.imagen4}.jpg`)}
        alt="Foto"
      />      
    </div>
  );
}
