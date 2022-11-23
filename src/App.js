import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import FemtioProcent from "./routes/FemtioProcent";
import Kategory from "./routes/Kategory";
import RenderSearch from "./routes/renderSearch/RenderSearch";

import Brod from "./routes/brod/Brod";
import Mejeri from "./routes/mejeri/Mejeri";
import Frukt from "./routes/frukt/Frukt";
import Veget from "./routes/veget/Veget";
import Dryck from "./routes/dryck/Dryck";
import Fryst from "./routes/fryst/Fryst";

function App() {
  return (
    <div className="page-container">
      <div className="container-wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<FemtioProcent />} />
          <Route path="/kategory" element={<Kategory />} />
          <Route path="/rendersearch" element={<RenderSearch />} />

          <Route path="/brod/Brod" element={<Brod />} />
          <Route path="/mejeri/Mejeri" element={<Mejeri />} />
          <Route path="/frukt/Frukt" element={<Frukt />} />
          <Route path="/veget/Veget" element={<Veget />} />
          <Route path="/dryck/Dryck" element={<Dryck />} />
          <Route path="/fryst/Fryst" element={<Fryst />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
