import React from "react";
import Navbar from "./components/NavScrollExample";
import Create from "./components/Create";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./components/Read";
import Update from "./components/Update";
import Index from "./esocity/editForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/edit/:id" element={<Update />}></Route>

          {/* <Route exact path="/" element={<Index />}></Route> */}
          <Route path="/read" element={<Read />}></Route>
          <Route path="/edit/:id" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
