import React, { useState } from "react";
import "../styles/PrivacyModal.css";

const PrivacyModal = ({ onAccept }) => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const handleAcceptCookies = () => {
    setCookiesAccepted(true);
  };

  const handleAcceptAll = () => {
    if (cookiesAccepted) {
      onAccept();
    } else {
      alert("Debes aceptar las cookies para continuar.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Aviso de Privacidad</h2>
        <p>
          Conforme a los artículos <strong>6</strong> y <strong>16</strong> de la
          Ley General de Protección de Datos Personales en Posesión de Sujetos
          Obligados (LGPDPSO), sus datos personales serán tratados de manera
          lícita, informada y responsable. Artículo 6 establece el principio de
          consentimiento y artículo 16 regula los derechos ARCO
          (Acceso, Rectificación, Cancelación y Oposición).
        </p>
        <p>
          Becas AConTrejo con domicilio en C. Real del Castillo 397, Granjas el Gallo, 22850 Ensenada, B.C.,
          es responsable del tratamiento de sus datos personales. Sus datos
          serán utilizados para el registro a la beca Universitario Feliz.
          
        </p>
        <p>
        Este sitio web utiliza cookies para mejorar tu experiencia de usuario. 
          Utilizamos cookies propias y de terceros para mejorar nuestros servicios 
          relacionados con tus preferencias, mediante el análisis de tus hábitos de navegación. 
          En caso de no aceptar las cookies, no podremos asegurarle el correcto funcionamiento 
          de las distintas funcionalidades de nuestra página web.
        </p>

        <div className="cookies">
          <input
            type="checkbox"
            id="acceptCookies"
            onChange={handleAcceptCookies}
          />
          <label htmlFor="acceptCookies">Acepto el uso de cookies</label>
        </div>

        <button onClick={handleAcceptAll}>Aceptar</button>
      </div>
    </div>
  );
};

export default PrivacyModal;
