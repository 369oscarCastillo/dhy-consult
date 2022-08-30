import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../Hojas-de-estilo/Formulario.css";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
        }}
        validate={(valores) => {
          let errores = {};

          //validacin nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          //validar correo
          if (!valores.correo) {
            errores.correo = "Por favor ingresa un correo electrónico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "El formulario solo puede contener letras, número, puntos y guiones";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario Enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 5000);
        }}
      >
        {({ values, errors }) => (
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                className="contenedor-texto"
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Apellidos y Nombres"
              />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
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
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>
            <div>
              <Field
                className="mensaje-texto"
                name="mensaje"
                as="textarea"
                placeholder="Mensaje"
              />
            </div>

            <button type="submit">Enviar</button>
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
