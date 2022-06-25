import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, ThemeSettings, Sidebar } from "./";
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
  index,
  Financial,
  ColorMapping,
} from "../pages";

export const AdminMainPage = () => {
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shawdow-xl hover:bg-light-gray"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar w-0</div>
          )}
          <div
            className={`dark:main-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72 w-full" : "w-full flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              Navbar
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard principal */}
              <Route path="/" element="ECommerce" />
              <Route path="/ecommerce" element="ECommerce" />

              {/* Páginas*/}
              <Route path="/orders" element="Orders" />
              <Route path="/customers" element="Customers" />
              <Route path="/ingredients" element="Ingredients" />

              {/* Apps */}
              <Route path="/kanban" element="Kanban" />
              <Route path="/calendar" element="Calendar" />
              <Route path="/editor" element="Editor" />

              {/* Gráficos */}
              <Route path="/line" element="Line" />
              <Route path="/area" element="Area" />
              <Route path="/bar" element="Bar" />
              <Route path="/pie" element="Pie" />
              <Route path="/financial" element="Financial" />
              <Route path="/color-mapping" element="ColorMapping" />
              <Route path="/pyramid" element="Pyramid" />
              <Route path="/stacked" element="Stacked" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AdminMainPage;
