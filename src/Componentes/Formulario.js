import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../Hojas-de-estilo/Formulario.css";

const Formulario = () => {
  const valorInicial = {
    nombre: "",
    correo: "",
    mensaje: "",
  };

  const [data, setData] = useState(valorInicial);

  //capturar valor
  const capturarValor = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClick = () => {
    fetch("https://sheet.best/api/sheets/16261052-0a2b-44d8-ac70-0bf75d77f246",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Nombre: data.nombre,
          Correo: data.correo,
          Mensaje: data.mensaje,
        }),
      }
    );
    setData({ ...valorInicial });
  };

  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          mensaje: "",
        }}
        // validate={(valores) => {
        //   let errores = {};

        //   //validacin nombre
        //   if (!valores.nombre) {
        //     errores.nombre = "Por favor ingresa un nombre";
        //   } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
        //     errores.nombre = "El nombre solo puede contener letras y espacios";
        //   }

        //   //validar correo
        //   if (!valores.correo) {
        //     errores.correo = "Por favor ingresa un correo electrónico";
        //   } else if (
        //     !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
        //       valores.correo
        //     )
        //   ) {
        //     errores.correo =
        //       "El formulario solo puede contener letras, número, puntos y guiones";
        //   }

        //   return errores;

        // }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario Enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ values, errors }) => (
          <Form className="formulario" id="formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
              <Field
                className="contenedor-texto"
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Apellidos y Nombres"
                onChange={capturarValor}
                value={data.nombre}
              />
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                className="contenedor-texto"
                type="text"
                id="correo"
                name="correo"
                placeholder="correo@empresaminera.com"
                onChange={capturarValor}
                value={data.correo}
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>
            <div>
              <Field
                className="mensaje-texto"
                id="mensaje"
                name="mensaje"
                as="textarea"
                placeholder="Mensaje"
                onChange={capturarValor}
                value={data.mensaje}
              />
            </div>

            <button type="submit" onClick={handleClick}>
              Enviar
            </button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
