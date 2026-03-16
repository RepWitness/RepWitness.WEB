import { Route, Routes } from "react-router-dom";
import { Dashboard, LogIn } from "../components";

export const RouterProvider = () =>{
    return (
        <Routes>
            <Route path="/" element={<LogIn/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}