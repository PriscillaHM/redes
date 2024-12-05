import React, { useState } from "react";
import PrivacyModal from "./components/PrivacyModal";
import Form from "./components/Form";
import "./App.css";

const App = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleAccept = () => {
    setModalVisible(false);
  };

  return (
    <div className="app-container">
      <h1>Formulario de Datos Personales</h1>
      {modalVisible ? <PrivacyModal onAccept={handleAccept} /> : <Form />}
    </div>
  );
};

export default App;
