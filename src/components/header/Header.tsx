import React, { useState } from "react";
import { OmbuLogo } from "@assets/svgs/OmbuLogo";
import { motion } from "framer-motion";
import "./header.scss";

const links = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "cursos",
    label: "Cursos",
  },
  {
    id: "quienes-somos",
    label: "Quiénes Somos",
  },
  {
    id: "contacto",
    label: "Contacto",
  },
];

const Header = () => {
  const [activeTabId, setActiveTabId] = useState("home");

  return (
    <div className="container">
      <header className="header">
        <div className="header-logo">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <OmbuLogo />
          </motion.div>
          <p>OMBU HUB</p>
        </div>
        <div className="header-links">
          {links.map((link) => {
            return (
              <a
                className={link.id === activeTabId ? "active" : ""}
                key={link.id}
                href={link.id}
                onClick={() => setActiveTabId(link.id)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default Header;
