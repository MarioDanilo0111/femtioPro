import React from "react";
import { Route, Routes } from "react-router-dom";

import FemtioProcent from "./routes/FemtioProcent";
import Kategory from "./routes/Kategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FemtioProcent />} />
        <Route path="/kategory" element={<Kategory />} />
      </Routes>
    </>
  );
}

export default App;
