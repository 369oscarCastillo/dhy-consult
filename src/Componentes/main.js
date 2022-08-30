import React from "react";
import "../Hojas-de-estilo/main.css";
import { FaDatabase, FaDiceD6, FaCogs, FaCoins } from "react-icons/fa";

export function Maintext(props) {
  return (
    <div className="contenedor-main">
      <div className="contenedor-texto-main">
        <p className="tema-contenido-main">
          <strong>{props.tema}</strong>
        </p>
        <p className="subtema-main">
          <strong>{props.subtema}</strong>{" "}
        </p>
        <p className="texto-main">
          {props.testimonio1} <strong>{props.testimonio2}</strong>{" "}
          {props.testimonio3}
        </p>
      </div>
    </div>
  );
}

export function Mainfig() {
  return (
    <div className="contenedor-mainfig">
      <button className="boton-mainfig">
        <h1>
          <FaDatabase />
        </h1>
      </button>
      <button className="boton-mainfig">Planeamiento</button>
      <button className="boton-mainfig">
        <h1>
          <FaDiceD6 />
        </h1>
      </button>
      <button className="boton-mainfig">Geología</button>
      <button className="boton-mainfig">
        4 ejes de Sostenibilidad Estratégica
      </button>
      <button className="boton-mainfig">Finanzas</button>
      <button className="boton-mainfig">
        <h1>
          <FaCogs />
        </h1>
      </button>
      <button className="boton-mainfig">Permisología</button>
      <button className="boton-mainfig">
        <h1>
          <FaCoins />
        </h1>
      </button>
    </div>
  );
}
