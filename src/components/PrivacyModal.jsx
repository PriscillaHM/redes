import React from "react";
import "../styles/PrivacyModal.css";

const PrivacyModal = ({ onAccept }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Aviso de Privacidad</h2>
        <p>
          Becas AConTrejo, con domicilio en C. Real del Castillo 397, Granjas el Gallo, 22850 Ensenada, B.C., es
          responsable del tratamiento de sus datos personales conforme a la Ley
          General de Protección de Datos Personales en Posesión de Sujetos
          Obligados de México. Sus datos serán utilizados para el registro a la 
          beca Universitario Feliz. 
        </p>
        <button onClick={onAccept}>Aceptar</button>
      </div>
    </div>
  );
};

export default PrivacyModal;
