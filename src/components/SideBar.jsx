import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBreadSlice } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";

//Archivos de prueba
import { links } from "../data/dummy";

const Sidebar = ({btns}) => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  /**
  La función handleCloseSideBar sirve para definir si el Sidebar va estar
  abierto o no automaticamente dependiendo del tamaño de la pantalla, llama
  a useStateContext de la clase ContextProvider
  */
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  
  return (
    <div className="ml-3 h-screen md:over-flow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/adminDashboard"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <FaBreadSlice /> <span>Little Treats</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
              {btns}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
