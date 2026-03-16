import {Route, Routes} from "react-router-dom";
import LogIn from "../components/Auth/LogIn.jsx";
import Dashboard from "../components/Dashboard/Dashboard.jsx";

export const RouterProvider = () =>{
    return (
        <Routes>
            <Route path="/" element={<LogIn/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}