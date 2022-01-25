import "../css/componentes.css";
import logo from "../assets/img/logo.jpg";

export const saludar = (nombre) => {
  console.log("creando etiqueta h1");
  const h1 = document.createElement("h1");
  h1.innerText = `Hola ${nombre}!!!`;
  document.body.append(h1);

  const imagen = document.createElement('img');
  imagen.src=logo;
  document.body.append(imagen);
};
