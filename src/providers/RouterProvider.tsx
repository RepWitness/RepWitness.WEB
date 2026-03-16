import { Route, Routes } from "react-router-dom";
import { Dashboard, Auth } from "../components";

export const RouterProvider = () =>{
    return (
        <Routes>
            <Route path="/" element={<Auth/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}