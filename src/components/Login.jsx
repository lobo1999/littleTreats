import React, {useState} from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

export default function Login() {

  const serverURL = "https://localhost:44304/api/Users";
const [data, setData] = useState([]);
const[userSelection, setUserSelection]=useState({
     ID: 0,
     email: '',
     password: '',
     role: ''
}) 

const handleChange=e=>{
  const {name, value}= e.target;
  setUserSelection({
    ...userSelection,
    [name]: value
  });
  console.log(userSelection)
}

function peticionLogin(){
fetch(`${serverURL}/${userSelection.email}/${userSelection.password}`)
.then(res=>res.json())
.then((result)=>{
      setUserSelection(result)
  },(error)=>{
      alert(error);
  })

 alert(userSelection.role);

}







  return (
    <div className="App bg-gray-200 h-screen w-screen relative overflow-hidden flex justify-center items-center">
      <div className="h-40-r w-40-r absolute left-2/3 -top-56 transform rotate-160"></div>
      <div className="h-35-r w-35-r absolute top-96 -left-20 transform rotate-180"></div>

      <div className="container h-96 w-96 bg-gray-900 shadow-2xl rounded-2xl border-solid border-teal-200 relative z-2">
        <form className="h-full flex flex-col justify-evenly items-center">
          <div className="text-white font-poppins text-2xl tracking-widest">
            Inicio de Sesión
          </div>
          <input type="text" placeholder="Correo electrónico" className="input-text" name="email" onChange={handleChange}/>
          <input
            type="password"
            placeholder="Contraseña"
            className="input-text"
            name="password"
            onChange={handleChange}
          />

          <Link to="/register" className="cursor-pointer text-white font-poppins text-1xl tracking-widest">
            Registrarme
          </Link>
          <input
            type="Submit"
            value="Iniciar Sesión"
            className="cursor-pointer font-poppins rounded-full px-6 py-1 bg-gray-200 hover:bg-gray-300 hover:bg-opacity-80 "
            onClick={()=>peticionLogin()}
          />
        </form>
      </div>
    </div>
  );
}
