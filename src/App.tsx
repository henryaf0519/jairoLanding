"use client";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Landing from "./pages/landing";



const App: React.FC = () => {
  
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      {/* Ruta principal carga Home */}
      <Route index element={<Landing />} />
      {/* 404 */}
    </Route>
  </Routes>
  );
};

export default App;
