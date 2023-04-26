import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../Componentes/Login/Login";
import { Home } from "../Componentes/Home/Home";
import {Signup} from "../Componentes/Signup/Signup";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "../Firebase";

export function MisRoutes() {
 const [userName,setUserName]=useState([])
 useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      setUserName(user.displayName)
    }else setUserName("")
  })
 },[])
 
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home name={userName}/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}