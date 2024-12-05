import React from "react";

const Form = () => {
  return (
    <form className="form">
      <input type="text" placeholder="Nombre" required />
      <input type="text" placeholder="Apellido" required />
      <input type="text" placeholder="CURP" required />
      <input type="email" placeholder="Correo Institucional" required />
      <input type="text" placeholder="Celular" required />
      <input type="text" placeholder="Universidad" required />
      <input type="text" placeholder="Carrera" required />
      <input type="text" placeholder="Cuatrimestre/Semestre" required />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
