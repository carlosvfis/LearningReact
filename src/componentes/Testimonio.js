import React from "react";
import "../hojas-de-estilo/Testimonio.css";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/testimonio-emma.png")}
        alt=""
      />
    </div>
  );
}

export default Testimonio;
