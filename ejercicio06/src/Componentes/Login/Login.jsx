import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { InputControl } from "../InputControl/InputControl";
import { auth } from "../../Firebase";

export function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const Iniciar = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Datos incompletos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div>
      <div> 
      <img className="img" src="https://media.istockphoto.com/id/936681148/es/vector/lock-icono-de.jpg?s=612x612&w=0&k=20&c=s4_wlpTBhoCaw-B4dGMLeMmls0zAFO8QuaBnomvpPzw=" alt="10px" height="100px" />
        <h1>Login</h1>
        <InputControl label="Email" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} placeholder="Ingrese su correo"/>
        <InputControl label="Contraseña" onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} placeholder="Ingrese su contraseña"/>
        <div>
          <b>{errorMsg}</b>
          <button onClick={Iniciar}>Login btn</button>
          <p>
            Crear cuenta
            <span>
              <Link to="/signup"> ir</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}