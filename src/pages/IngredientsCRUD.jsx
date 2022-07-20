import React from "react";
import { useState, useEffect } from "react";

function IngredientsCRUD({ setModalOn, setChoice }) {
  const serverURL = "https://localhost:44304/api/Inventory";
  const [data, setData] = useState([]);

  /**Para cuestiones de API dentro de de; userSelection los campos serían:
  name: "",
  unitofMeasurement: "",
  amount: "",
  price: "",
  brand: "",
  */

  const handleOKClick = () => {
    peticionPost();
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };
  const initialValues = {
    nombre: "",
    unidaddemedida: "",
    cantidad: "",
    precio: "",
    marca: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.nombre) {
      errors.nombre = "¡El nombre del ingrediente es necesario!";
    }
    if (!values.unidaddemedida) {
      errors.unidaddemedida = "¡La unidad de medida es necesario!";
    }
    if (!values.cantidad) {
      errors.cantidad = "¡El número de teléfono es necesario!";
    }
    if (!values.precio) {
      errors.precio = "¡El precio es necesario!";
    }

    if (!values.marca) {
      errors.marca = "¡La marca es necesaria!";
    } 
    return errors;
  };


  function peticionPost() {
    fetch(serverURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formValues.nombre,
        unit: formValues.unidaddemedida,
        quantity: formValues.cantidad,
        price: formValues.precio,
        brand: formValues.marca,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert(error);
        }
      );
  }

  return (
    <div className="bg-zinc-200 opacity-90 fixed inset-0 z-50   ">
      <div className="flex h-screen justify-center items-center ">
        <div className="flex-col justify-center bg-white py-12 px-24 border-4 border-sky-500 rounded-xl ">
          <div>
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
              <h1 className="px-8 text-gray-500 font-bold mx-auto md:text-right mb-1 md:mb-4 pr-4">
                Formulario Ingreso de Ingrediente
              </h1>
              <div className="md:items-center mb-6">
                <div className="relative inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <input
                    className="block rounded-t-lg px-14 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="text"
                    name="nombre"
                    value={formValues.nombre}
                    onChange={handleChange}
                  />
                  <label
                    for="floating_filled"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Nombre
                  </label>
                </div>
                <p>{formErrors.nombre}</p>
                <div className="relative inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <input
                    className="block rounded-t-lg px-14 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="list"
                    list="units"
                    name="unidaddemedida"
                    value={formValues.unidaddemedida}
                    onChange={handleChange}
                  />
                  <label
                    for="floating_filled"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Unidad de Medida
                  </label>
                  <datalist id="units">
                    <option value="Kg">Kg</option>
                    <option>G</option>
                    <option>Oz</option>
                    <option>Gal</option>
                    <option>Lt</option>
                    <option>ml</option>
                  </datalist >
                </div>
                <p>{formErrors.unidaddemedida}</p>
                <div className="relative inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <input
                    className="block rounded-t-lg px-14 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="number"
                    min="0"
                    name="cantidad"
                    value={formValues.cantidad}
                    onChange={handleChange}
                  />
                  <label
                    for="floating_filled"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Cantidad
                  </label>
                </div>
                <p>{formErrors.cantidad}</p>
                <div className="relative inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <input
                    className="block rounded-t-lg px-14 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="number"
                    min="100"
                    name="precio"
                    value={formValues.precio}
                    onChange={handleChange}
                  />
                  <label
                    for="floating_filled"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Precio
                  </label>
                </div>
                <p>{formErrors.precio}</p>
                <div className="relative inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <input
                    className="block rounded-t-lg px-14 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="text"
                    name="marca"
                    value={formValues.marca}
                    onChange={handleChange}

                  />
                  <label
                    for="floating_filled"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Marca
                  </label>
                </div>
                <p>{formErrors.marca}</p>
              </div>
            </form>
          </div>
          <div className="flex px-16">
            <button
              onClick={handleOKClick}
              className="rounded px-4 py-2 text-white  bg-green-400 "
            >
              Agregar
            </button>
            <button
              onClick={handleCancelClick}
              className="rounded px-4 py-2 ml-4 text-white bg-blue-500 "
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IngredientsCRUD;
