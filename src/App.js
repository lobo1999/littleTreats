import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminMainPage from "./components/AdminMainPage";
import {
  Ecommerce,
  Orders,
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
  ColorMapping,
} from "./pages";

export const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminDashboard" element={<AdminMainPage />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/stacked" element={<Stacked />} />
          <Route path="/pyramid" element={<Pyramid />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/line" element={<Line />} />
          <Route path="/area" element={<Area />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/colorMapping" element={<ColorMapping />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
