import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, ThemeSettings, Sidebar } from "./";
import { useStateContext } from "../contexts/ContextProvider";
import {
  Customers,
  Orders,
  Ecommerce,
  Ingredients,
  Charges,
  Products,
} from "../pages";
import { links } from "../data/dummy";

export default function AdminMainPage() {
  const { activeMenu } = useStateContext();
  const [isEcommerceActive, setEcommerceActive] = useState(false);
  const [isOrdersActive, setOrdersActive] = useState(false);
  const [isBookActive, setBookActive] = useState(false);
  const [isCustomersActive, setCustomersActive] = useState(false);
  const [isChargesActive, setChargesActive] = useState(false);
  const [isProductsActive, setProductsActive] = useState(false);
  const [isIngredientsActive, setIngredientsActive] = useState(false);
  const { activeSideBar, setActiveSideBar, screenSize } = useStateContext();
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  const btnsCreator = () => {
    const clickEcommmerce = () => {
      setEcommerceActive(true);
      setOrdersActive(false);
      setCustomersActive(false);
      setIngredientsActive(false);
      setBookActive(false);
      setChargesActive(false);
      setProductsActive(false);
    };

    const clickOrders = () => {
      setOrdersActive(true);
      setCustomersActive(false);
      setIngredientsActive(false);
      setBookActive(false);
      setEcommerceActive(false);
      setChargesActive(false);
      setProductsActive(false);
    };

    const clickBook = () => {
      setBookActive(true);
      setCustomersActive(false);
      setOrdersActive(false);
      setIngredientsActive(false);
      setChargesActive(false);
      setEcommerceActive(false);
      setProductsActive(false);
    };

    const clickCustomers = () => {
      setCustomersActive(true);
      setOrdersActive(false);
      setIngredientsActive(false);
      setBookActive(false);
      setEcommerceActive(false);
      setChargesActive(false);
      setProductsActive(false);
    };

    const clickIngredients = () => {
      setIngredientsActive(true);
      setCustomersActive(false);
      setOrdersActive(false);
      setBookActive(false);
      setEcommerceActive(false);
      setChargesActive(false);
      setProductsActive(false);
    };

    const clickCharges = () => {
      setChargesActive(true);
      setIngredientsActive(false);
      setCustomersActive(false);
      setOrdersActive(false);
      setBookActive(false);
      setEcommerceActive(false);
      setProductsActive(false);
    };

    const clickProducts = () => {
      setProductsActive(true);
      setChargesActive(false);
      setIngredientsActive(false);
      setCustomersActive(false);
      setOrdersActive(false);
      setBookActive(false);
      setEcommerceActive(false);
    };

    const btnHandler = (element, handlerEvent) => {
      return (
        <button
          key={element.name}
          onClick={handlerEvent}
          className={`flex justify-items-center px-2 py-3 mb-1 rounded-2xl ${({
            isActive,
          }) => (isActive ? activeLink : normalLink)}
      hover:bg-gray-200`}
        >
          {element.icon}
          <span className="capitalize font-semibold ml-2 border-solid">
            {element.name}
          </span>
        </button>
      );
    };
    var handler;

    return links.map((item) => (
      <div key={item.title}>
        <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
        {item.links.map((link) => {
          if (link.name === "ordenes") {
            handler = clickOrders;
            return btnHandler(link, handler);
          } else if (link.name === "clientes") {
            handler = clickCustomers;
            return btnHandler(link, handler);
          } else if (link.name === "comercio") {
            handler = clickEcommmerce;
            return btnHandler(link, handler);
          } else if (link.name === "ingredientes") {
            handler = clickIngredients;
            return btnHandler(link, handler);
          } else if (link.name === "productos") {
            handler = clickProducts;
            return btnHandler(link, handler);
          } else if (link.name === "kanban") {
            return btnHandler(link, handler);
          } else if (link.name === "calendario") {
            return btnHandler(link, handler);
          } else if (link.name === "linea") {
            return btnHandler(link, handler);
          } else if (link.name === "area") {
            return btnHandler(link, handler);
          } else if (link.name === "barras") {
            return btnHandler(link, handler);
          } else if (link.name === "pizza") {
            return btnHandler(link, handler);
          } else if (link.name === "financiero") {
            return btnHandler(link, handler);
          } else if (link.name === "mapa-de-color") {
            return btnHandler(link, handler);
          } else if (link.name === "piramide") {
            return btnHandler(link, handler);
          } else if (link.name === "editor") {
            return btnHandler(link, handler);
          } else if (link.name === "apilado") {
            return btnHandler(link, handler);
          }
        })}
      </div>
    ));
  };

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
            <Sidebar btns={btnsCreator()} />
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

            {isEcommerceActive ? <Ecommerce /> : null}

            {isOrdersActive ? <Orders /> : null}

            {isCustomersActive ? <Customers /> : null}
            {isIngredientsActive ? <Ingredients /> : null}
            {isChargesActive ? <Charges /> : null}
            {isProductsActive ? <Products /> : null}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
