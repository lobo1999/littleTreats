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
import { ordersData, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import { OrdersCRUD } from "./";
import { useState } from "react";

const Orders = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Edit', 'Delete', 'Update', 'Cancel'];
  const editing = { allowDeleting: true, allowEditing: true };
  const targetEl = document.getElementById("defaultModal");
  {
    /**const modal = new Modal(targetEl);*/
  }
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const clicked = () => {
    setModalOn(true);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Órdenes" />   
      <div className="top-left">
        <div>
          <div className="flex justify-center">
            <div
              className="flex  cursor-pointer justify-center w-1/3  bg-blue-400 p-4  m-6 rounded-md text-white"
              onClick={clicked}
            >
              Agregar Orden
            </div>
          </div>

          {/* conditionally display the result of the action if user confirms  */}
          {choice && (
            <div className="flex justify-center">
              <div className="flex  justify-center w-1/3 bg-red-400 m-4 p-6 text-lg text-white ">
                {" "}
                Orden agregada
              </div>
            </div>
          )}

          {modalOn && (
            <OrdersCRUD setModalOn={setModalOn} setChoice={setChoice} />
          )}
        </div>
      </div>
      <GridComponent
        dataSource={ordersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
        <ColumnDirective field="DateOfRealization" headerText="Fecha de Pedido" textAlign="Center" width="150" editType="datepickeredit"/>
        <ColumnDirective field="TotalPrice" headerText="Precio Total" textAlign="Center" width="150" editType="numericedit"/>
        <ColumnDirective field="IdState" headerText="Estado de Orden" textAlign="Center" width="150"/>
        <ColumnDirective field="OrderID" headerText="Número de Orden" textAlign="Center" width="150"/>
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Orders;
