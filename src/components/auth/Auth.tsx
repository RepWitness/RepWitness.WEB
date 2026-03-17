import { useState } from "react";
import { LogIn } from "./LogIn";
import { Register } from "./Register";
import { useNavigate } from "react-router-dom";
import { MainScreen } from "../common";

export const Auth = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const navigate = useNavigate();

  function goToDashboard(){
    navigate('/dashboard')
  }

  return (
    <MainScreen className="items-center justify-center">
      <div className="w-120 h-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl flex flex-col items-center text-white px-4 py-10 gap-3">
        <h1 className="text-3xl text-slate-300">RepWitness</h1>
        <h3 className="text-sm text-slate-400">Track. Connect. Improve.</h3>
        <h3 className="text-2xl text-slate-300">Welcome back!</h3>
        {isLogIn ? <LogIn goToDashboard={goToDashboard}/> : <Register goToDashboard={goToDashboard}/>}
        <p className="text-slate-300 mt-3">
          {isLogIn ? "Already have an account?" : "Don’t have an account yet?"}{" "}
          <button className="text-power-purple underline hover:cursor-pointer" onClick={() =>setIsLogIn(prev => !prev)}>
             {isLogIn ? "Register now!" : "LogIn now!"}
          </button>
        </p>
      </div>
    </MainScreen>
  );
};
