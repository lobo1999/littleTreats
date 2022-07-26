import React from "react";
import { useState, useEffect } from "react";

function OrdersCRUD({ setModalOn, setChoice }) {
  const serverURL = "https://localhost:44304/api/OrderCharge";
  const [data, setData] = useState([]);

  const initialValues = {
    fechaEntrega: "",
    precioTotal: "",
    estado: "",
    descripcion: "",
    metodoEntrega: "",
    cliente: "",
    direccion: "",
  };

  const handleOKClick = () => {
    peticionPost();
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
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
    if (!values.username) {
      errors.username = "¡El nombre es necesario!";
    }
    if (!values.lastname) {
      errors.lastname = "¡El apellido es necesario!";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "¡El número de teléfono es necesario!";
    }
    if (!values.email) {
      errors.email = "¡El correo electrónico es necesario!";
    } else if (!regex.test(values.email)) {
      errors.email = "¡Digite un correo aceptable!";
    }
    if (!values.password) {
      errors.password = "¡La contraseña es necesaria!";
    } else if (values.password.length < 4) {
      errors.password = "¡La contraseña debe tener menos de 4 caracteres!";
    } else if (values.password.length > 10) {
      errors.password = "¡La contraseña no debe tener más de 10 caracteres!";
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
        lastName: formValues.apellido,
        phone: formValues.teléfono,
        email: formValues.correo,
        password: "",
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
              <h1 className="px-8 text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                Formulario Ingreso de Orden
              </h1>
              <div className="md:items-center mb-6">
                <div className="relative inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>  
                  <input
                    datepicker
                    datepicker-autohide
                    type="date"
                    name="fechaEntrega"
                    value={formValues.fechaEntrega}
                    onChange={handleChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-24 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Fecha de Entrega"
                  />
                </div>
                <p>{formErrors.fechaEntrega}</p>
                <div className="relative inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <input
                    className="block rounded-t-lg px-14 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="numeric"
                    name="precioTotal"
                    value={formValues.precioTotal}
                    onChange={handleChange}
                  />
                  <label
                    for="floating_filled"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Precio total
                  </label>
                </div>
                <p>{formErrors.precioTotal}</p>
                <div className="relative inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <input
                    className="block rounded-t-lg px-14 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="list"
                    list="states"
                    name="estado"
                    value={formValues.estado}
                    onChange={handleChange}
                  />
                  <label
                    for="floating_filled"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Estado de Orden
                  </label>
                  <datalist id="states">
                    <option value="1">En proceso</option>
                    <option value="2">Entregado</option>
                    <option value="3">Cancelado</option>
                  </datalist>
                </div>
                <p>{formErrors.estado}</p>
                <div className="relative inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <input
                    className="block rounded-t-lg px-14 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="text"
                    name="descripcion"
                    value={formValues.descripcion}
                    onChange={handleChange}
                  />
                  <label
                    for="floating_filled"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Descripción
                  </label>
                </div>
                <div className="relative inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <input
                    className="block rounded-t-lg px-14 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="text"
                    name="direccion"
                    value={formValues.direccion}
                    onChange={handleChange}
                  />
                  <label
                    for="floating_filled"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Dirección
                  </label>
                </div>
                <div className="relative inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <input
                    className="block rounded-t-lg px-14 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="list"
                    list="deliverMethod"
                    name="metodoEntrega"
                    value={formValues.metodoEntrega}
                    onChange={handleChange}
                  />
                  <label
                    for="floating_filled"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Método de Entrega
                  </label>
                  <datalist id="deliverMethod">
                    <option value="A domicilio">A domicilio</option>
                    <option value="Recoger">Recoger</option>
                  </datalist>
                </div>
                <div className="relative inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <input
                    className="block rounded-t-lg px-14 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="list"
                    list="client"
                    name="cliente"
                    value={formValues.cliente}
                    onChange={handleChange}
                  />
                  <label
                    for="floating_filled"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Cliente
                  </label>
                  <datalist id="client">
                    <option>Alana Atencio</option>
                    <option>Emily</option>
                  </datalist>
                </div>

              </div>
            </form>
          </div>
          <div className="flex px-16">
            <button
            
              onClick={handleOKClick}
              onSubmit={handleSubmit}
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

export default OrdersCRUD;
