import React, { useState } from "react";
import axios from 'axios';
const serverURL = "https://localhost:44304/api/Users";
function Register() {
  

const [data, setData] = useState([]);
const[userSelection, setUserSelection]=useState({
     name: '',
     lastName: '',
     phone: '',
     email: '',
     password: ''
}) 

const handleChange=e=>{
  const {name, value}= e.target;
  setUserSelection({
    ...userSelection,
    [name]: value
  });
  console.log(userSelection);
}

function handleSubmit(e, data) {
  alert("AAAA");
}

const peticionPost = async () => {
  
  await axios.post(serverURL, userSelection).then(response=>{
    
    setData(data.concat(response.data));

  });

  return data;

}

  return (
    <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
      <div className="h-40-r w-40-r bg-gradient-to-r from-orange-400 to-amber-300 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
      <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>

      <div className="container px-4 h-96 w-110 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
        <form  onSubmit={handleSubmit} className="h-full flex flex-col justify-evenly items-center">
          <div className="text-white font-poppins text-2xl tracking-widest">
            Registro de Usuario
          </div>
          <div className="flow-root">
            <h2 className="text-white float-left">Nombre</h2>
            <input
              type="text"
              placeholder="nombre"
              className="input-text float-right mx-3"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="flow-root">
            <h2 className="text-white float-left">Apellido</h2>
            <input
              type="text"
              placeholder="apellido"
              className="input-text float-right mx-3"
              name="lastName"
              onChange={handleChange}
            />
          </div>
          <div className="flow-root">
            <h2 className="text-white float-left">Número de Teléfono</h2>
            <input
              type="text"
              placeholder="número de teléfono"
              className="input-text float-right mx-3"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className="flow-root">
            <h2 className="text-white float-left">Correo electrónico</h2>
            <input
              type="text"
              placeholder="correo electrónico"
              className="input-text float-right mx-3"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="flow-root">
            <h2 className="text-white float-left">Contraseña</h2>
            <input
              type="password"
              placeholder="contraseña"
              className="input-text float-right mx-3"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="flow-root">
            <h2 className="text-white float-left">Confirmar contraseña</h2>
            <input
              type="password"
              placeholder="contraseña"
              className="input-text float-right mx-3"
              onChange={handleChange}
            />
          </div>

          <input
            type="Submit"
            value="Registrarse"
            className="cursor-pointer font-poppins rounded-full px-6 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 "
            onClick={()=>peticionPost()}
           ></input>   
        </form>
      </div>
    </div>
  );

 
}

export default Register;

