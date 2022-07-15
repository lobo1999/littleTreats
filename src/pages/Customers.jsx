import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
import { CustomersCRUD } from "./";
import { useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

const Customers = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Borrar"];
  const editing = { allowDeleting: true, allowEditing: true };
  const targetEl = document.getElementById("defaultModal");
  {
    /**const modal = new Modal(targetEl);*/
  }
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const modifyOption = () =>{
    <ButtonComponent>Modificar</ButtonComponent>
  }

  const clicked = () => {
    setModalOn(true);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Clientes" />
      <div className="top-left">
        <div>
          <div className="flex justify-center">
            <div
              className="flex  cursor-pointer justify-center w-1/3  bg-blue-400 p-4  m-6 rounded-md text-white"
              onClick={clicked}
            >
              Agregar Cliente
            </div>
          </div>

          {/* conditionally display the result of the action if user confirms  */}
          {choice && (
            <div className="flex justify-center">
              <div className="flex  justify-center w-1/3 bg-red-400 m-4 p-6 text-lg text-white ">
                {" "}
                Cliente agregado
              </div>
            </div>
          )}

          {modalOn && (
            <CustomersCRUD setModalOn={setModalOn} setChoice={setChoice} />
          )}
        </div>
      </div>
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
            <ColumnDirective headerText='Opciones'/>
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
