import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import ScriptTag from '@gumgum/react-script-tag';
import CatalogGrid from "./pages/CatalogGrid";
import CatalogList from "./pages/CatalogList";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="cataloggrid" element={<CatalogGrid />} />
        <Route path="cataloglist" element={<CatalogList />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
      </Routes>
      <div class="snackbars" id="form-output-global"></div>,
      <ScriptTag isHydrating={true} type="text/javascript" src="../assets/js/core.min.js" crossorigin="anonymous" />
      <ScriptTag isHydrating={true} type="text/javascript" src="../assets/js/script.js" crossorigin="anonymous" />
    </React.Fragment>
  );
}

export default App;
