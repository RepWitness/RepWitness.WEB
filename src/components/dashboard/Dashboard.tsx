import { Dumbbell, Home, Settings, Shield, Target, TrendingUp, User } from "lucide-react";
import type { SideBarButton } from "../../models";
import { MainScreen } from "../common";
import { SideBar } from "./SideBar";

const buttons: SideBarButton[] = [
  { name: "Dashboard", icon: <Home/>, isActive: true },
  { name: "Users", icon: <User/>, isActive: false },
  { name: "Roles", icon: <Shield/>, isActive: false },
  { name: "Exercises", icon: <Dumbbell/>, isActive: false },
  { name: "Workouts", icon: <TrendingUp/>, isActive: false },
  { name: "Goals", icon: <Target/>, isActive: false },
  { name: "Settings", icon: <Settings/>, isActive: false }
];

export const Dashboard = () => {
    return (
       <MainScreen className="p-4 gap-3">
        <div className="bg-white/10 backdrop-blur-lg h-full w-full p-2 rounded-2xl flex">
            <SideBar buttons={buttons}/>
            <div className="h-full w-17/20 rounded-2xl"></div>
        </div>
        </MainScreen>
    )
}