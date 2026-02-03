import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from "./components/Header/Header";
import { CircleMenu } from "./components/CircleMenu/CircleMenu";
import { Footer } from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <CircleMenu />
      <Footer />
    </div>
  </React.StrictMode>
);