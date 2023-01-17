import React from "react";
import Header from "@components/header/Header";
import Content from "@components/content/Content";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Content />
    </div>
  );
};

export default App;
