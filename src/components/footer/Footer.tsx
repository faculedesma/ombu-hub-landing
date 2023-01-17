import React, { useState } from "react";
import SecondaryCTAButton from "@components/buttons/SecondaryCTAButton";
import { Facebook } from "@assets/svgs/Facebook";
import { Whatsapp } from "@assets/svgs/Whatsapp";
import { Instagram } from "@assets/svgs/Instagram";
import { LinkedIn } from "@assets/svgs/LinkedIn";
import Input from "@components/inputs/Input";
import TextArea from "@components/inputs/TextArea";
import MapPNG from "@assets/images/map.png";
import "./footer.scss";

const Footer = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // send request to save the data
    console.log(name, surname, email, message);
  };

  return (
    <div className="footer-bg">
      <div className="container">
        <footer className="footer">
          <div className="footer-left">
            <div className="footer-left--location">
              <h3>Cómo llegar</h3>
              <img src={MapPNG} alt="map" />
              <p>Mate de Luna 4664, San Miguel de Tucuman, Argentina</p>
            </div>
            <div className="footer-left--social">
              <p>Seguinos</p>
              <div className="footer-left--social-networks">
                <Facebook />
                <Instagram />
                <LinkedIn />
                <Whatsapp />
              </div>
            </div>
            <div className="footer-left--copyright">
              <p>Copyright © 2023</p>
              <p>Todos los derechos reservados | OMBU Hub</p>
            </div>
          </div>
          <div className="footer-center">
            <h3>Información</h3>
            <ul>
              <li>Cursos</li>
              <li>Sobre nosotros</li>
              <li>Otro</li>
              <li>Algo más</li>
              <li>Último</li>
            </ul>
          </div>
          <div className="footer-right">
            <h3>Contactános</h3>
            <form className="footer-right--form">
              <Input
                type="text"
                placeholder="Nombre"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Apellido"
                onChange={(e) => setSurname(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextArea
                placeholder="Dejá tu mensaje aquí"
                size="large"
                onChange={(e) => setMessage(e.target.value)}
              />
              <SecondaryCTAButton
                label="Enviar mensaje"
                onClick={handleSubmit}
              />
            </form>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
