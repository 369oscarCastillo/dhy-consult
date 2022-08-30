import React from "react";
import '../Hojas-de-estilo/Subcontenido.css';

function Subcontenido(props) {
  return (
    <div className="contenedor-subcontenido">      
      <h3>{props.titulo}</h3>
      <img
        className="imagen-subcontenido"
        src={require(`../imagenes/img-${props.imagen}.png`)}
        alt="Foto"
      />
      <div>
      <p className="icono-subcontenido">
          <strong>{props.icono1}{props.icono2}{props.icono3}</strong>
        </p>
        <p className="texto-subcontenido">
          {props.texto}
        </p>
        
      </div>
    </div>
  );
}

export default Subcontenido;