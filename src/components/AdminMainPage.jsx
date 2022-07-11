import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, ThemeSettings, Sidebar } from "./";
import { useStateContext } from "../contexts/ContextProvider";
import { Customers, Orders, Ecommerce  } from "../pages";

export default function AdminMainPage() {
  const { activeMenu } = useStateContext();
  const [ isEcommerceActive, setEcommerceActive] = useState(false);
  const [ isOrdersActive, setOrdersActive] = useState(false);
  const [ isBookActive, setBookActive] = useState(false);
  const [ isCustomersActive, setCustomersActive] = useState(false);
  const [ isIngredientsActive, setIngredientsActive] = useState(false);

  const clickEcommmerce = () => {
    setEcommerceActive(true);
    setOrdersActive(false);
    setCustomersActive(false);
    setIngredientsActive(false);
    setBookActive(false);
  }

  const clickOrders = () => {
    setOrdersActive(true);
    setCustomersActive(false);
    setIngredientsActive(false);
    setBookActive(false);
    setEcommerceActive(false);
  }

  const clickBook = () => {
    setBookActive(true);
    setCustomersActive(false);
    setOrdersActive(false);
    setIngredientsActive(false);
    setEcommerceActive(false);
  }
  
  const clickCustomers = () => {
    setCustomersActive(true);
    setOrdersActive(false);
    setIngredientsActive(false);
    setBookActive(false);
    setEcommerceActive(false);
  }

  const clickIngredients = () => {
    setIngredientsActive(true);
    setCustomersActive(false);
    setOrdersActive(false);
    setBookActive(false);
    setEcommerceActive(false);
  }


  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shawdow-xl hover:bg-light-gray"
              style={{ background: "gray", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">Sidebar w-0</div>
        )}
        {}
        <div
          className={`dark:main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72 w-full" : "w-full flex-2"
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />

            { isEcommerceActive ?
              <Ecommerce/> : null
            }
            
            {
              isOrdersActive ? 
                <Orders/> : null
            }

            {
              isCustomersActive ? 
              <Customers/> : null
            }
          </div>
        </div>
        <div>
          <button onClick={ clickEcommmerce }>Tablero principal</button>
          <button onClick={ clickOrders }>Orders</button>
          <button onClick={ clickBook }>Encargos</button>
          <button onClick={ clickCustomers }>Customers</button>
          <button onClick={ clickIngredients }>Ingredients</button>

          <Link to="/kanban">Kanban</Link>
          <Link to="/calendario">Calendar</Link>
          <Link to="/editor">Editor</Link>
          <Link to="/linea">Line</Link>
          <Link to="/area">Area</Link>
          <Link to="/bar">Bar</Link>
          <Link to="/pizza">Pie</Link>
          <Link to="/financiero">Financial</Link>
          <Link to="/mapa-de-color">Color Mapping</Link>
          <Link to="/piramide">Pyramid</Link>
          <Link to="/apilado">Stacked</Link>
          <div className="relative bg-gray">
      
            
        </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
