import { Route, Routes } from "react-router-dom";
import { Dashboard, Auth, Profile } from "../components";

export const RouterProvider = () =>{
    return (
        <Routes>
            <Route path="/" element={<Auth/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    )
}