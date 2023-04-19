import React from "react";
import alimentacao from "../assets/images/alimentacao.svg"
import outros from "../assets/images/outros.svg"
import saude from "../assets/images/saude.svg"
import transporte from "../assets/images/transporte.svg"
import utilidades from "../assets/images/alimentacao.svg"
import { IconeTema } from "./Ui";

// eslint-disable-next-line import/no-anonymous-default-export
export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
    Utiledades: <IconeTema src={utilidades} alt="Utiledades" />,
    Saude: <IconeTema src={saude} alt="Saude" />,
    Transporte: <IconeTema src={transporte} alt="Transporte" />,
    default: <IconeTema src={outros} alt="Outro" />,
  };

  return Images[type] || Images.default;
}
