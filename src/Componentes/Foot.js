import React from "react";
import "../Hojas-de-estilo/Foot.css";

function Pie({ nombre, cadena1, cadena2, cadena3, cadena4 }) {
  return (
    <div className="contenedor">
      <h1 className="contenedor-titulo">{nombre}</h1>
      <p>{cadena1}</p>
      <p>{cadena2}</p> 
      <p>{cadena3}</p>      
    </div>
  );
}

export function Redes({ nombre1 }) {
  return (
    <div className="contenedor-redes">
      <h1 className="contenedor-titulo">{nombre1}</h1>
      <div className="contenedor-figura">
        <a href="https://www.linkedin.com/company/dhy-mining-corp-srl/about/?viewAsMember=true">
          <img
            className="imagen-redes"
            src={require(`../imagenes/linkedin.png`)}
            alt="Foto de Linkedin"
            title="Linkedin"
          />          
        </a>
      </div>
    </div>
  );
}

export default Pie;