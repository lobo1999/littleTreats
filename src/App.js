import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminMainPage from "./components/AdminMainPage";
import {
  Ecommerce,
  Orders,
  Charges,
  Calendar,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping
} from "./pages";

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminDashboard" element={<AdminMainPage />} />
          <Route path="/encargos" element={<Charges />} />
          <Route path="/comercio" element={<Ecommerce />} />
         
          <Route path="/calendario" element={<Calendar />} />
          <Route path="/apilado" element={<Stacked />} />
          <Route path="/piramide" element={<Pyramid />} />
          <Route path="/clientes" element={<Customers />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/linea" element={<Line />} />
          <Route path="/area" element={<Area />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pizza" element={<Pie />} />
          <Route path="/financiero" element={<Financial />} />
          <Route path="/mapa-de-color" element={<ColorMapping />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
