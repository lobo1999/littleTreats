import React from "react";
import { useState, useEffect } from "react";

function CustomersCRUD({ setModalOn, setChoice }) {
  const serverURL = "https://localhost:44304/api/Users";
  const [data, setData] = useState([]);
  const [userSelection, setUserSelection] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

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
    apellido: "",
    teléfono: "",
    correo: "",
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

  const handleChange_ = (e) => {
    const { name, value } = e.target;
    setUserSelection({
      ...userSelection,
      [name]: value,
    });
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
                Formulario Ingreso de Cliente
              </h1>
              <div className="md:items-center mb-6">
                <div className="inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <label className="inline">Nombre</label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formValues.username}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.username}</p>
                <div className="inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <label>Apellido</label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={formValues.lastname}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.username}</p>
                <div className="inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <label>Teléfono</label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    type="text"
                    name="teléfono"
                    placeholder="Teléfono"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.username}</p>
                <div className="inline-flex text-gray-500 font-bold md:text-right mb-1 md:mb-4 pr-4">
                  <label>Correo</label>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    type="text"
                    name="correo"
                    placeholder="correo electrónico"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                <p>{formErrors.email}</p>
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

export default CustomersCRUD;
