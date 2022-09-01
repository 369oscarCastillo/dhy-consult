import React, { useState } from "react";
import "../Hojas-de-estilo/Head.css";

export function Imagen() {
  return (
    <a href="https://369oscarcastillo.github.io/dhy-consult/">
      <img className="logo" src={require(`../imagenes/logo.jpg`)} alt='logo' title="DHY Mining"/>;
    </a>
  );
}

export function Titulos() {
  return (
    <div className="titulos">
      <a className="titulo-texto" href="#nosotros">
        Nosotros
      </a>
      <a className="titulo-texto" href="#servicios">
        Servicios
      </a>
      <a className="titulo-texto" href="#entregables">
        Entregables
      </a>
      <a className="titulo-texto" href="#investigacion">
        Investigación
      </a>
      <a className="titulo-texto" href="#contactos">
        Contacto
      </a>
    </div>
  );
}

function BurgerButton(props) {
  return (
    <div
      onClick={props.handleClick}
      className={`nav-icon-1 ${props.clicked ? "open" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

function Head() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className={`links ${clicked ? "active" : ""} `}>
        <a onClick={handleClick} href="#nosotros">
          <button className="boton-menu">Sobre Nosotros</button>
        </a>
        <a onClick={handleClick} href="#servicios">
          <button className="boton-menu">Servicios</button>
        </a>
        <a onClick={handleClick} href="#entregables">
          <button className="boton-menu">Entregables</button>
        </a>
        <a onClick={handleClick} href="#contactos">
          <button className="boton-menu">contactos</button>
        </a>
      </div>
      <div className="burger">
        <BurgerButton clicked={clicked} handleClick={handleClick} />
      </div>
    </>
  );
}

export function Socialmedia({ nombre }) {
  return (
    <div>
      <div className="contenedor-imagen-socialmedia">
        <a href="https://www.linkedin.com/company/dhy-mining-corp-srl/about/?viewAsMember=true">
          <img
            className="imagen-socialmedia"
            src={require(`../imagenes/linkedin.png`)}
            alt="Foto de Linkedin"
            title="Linkedin"
          />
        </a>
        <a href="https://www.linkedin.com/company/dhy-mining-corp-srl/about/?viewAsMember=true">
          <img
            className="imagen-socialmedia"
            src={require(`../imagenes/whatsapp.png`)}
            alt="Foto de Whatsapp"
            title="whatsapp"
          />
        </a>
      </div>
    </div>
  );
}

export default Head;
