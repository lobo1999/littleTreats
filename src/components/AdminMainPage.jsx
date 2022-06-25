import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, ThemeSettings, Sidebar } from "./";


export default function AdminMainPage() {
  const activeMenu = true;

  return (
    <div>
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
          {/* Dashboard principal */}
          <Link to="/ecommerce">Ecommerce</Link>

          {/* Páginas*/}
          <Link to="/orders">Orders</Link>
          <Link to="/customers">Customers</Link>
          <Link to="/ingredients">Ingredients</Link>

          {/* Apps */}
          <Link to="/kanban">Kanban</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/editor">Editor</Link>

          {/* Gráficos */}
          <Link to="/line">Line</Link>
          <Link to="/area">Area</Link>
          <Link to="/bar">Bar</Link>
          <Link to="/pie">Pie</Link>
          <Link to="/financial">Financial</Link>
          <Link to="/colorMapping">Color Mapping</Link>
          <Link to="/pyramid">Pyramid</Link>
          <Link to="/stacked">Stacked</Link>
        </div>
      </div>
    </div>
  );
}