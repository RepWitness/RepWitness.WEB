import type { SideBarButton } from "../../models";
import { MainScreen } from "../common";
import { SideBar } from "./SideBar";

const buttons: SideBarButton[] = [
  { name: "Dashboard", icon: "layout-dashboard", isActive: true },
  { name: "Users", icon: "user", isActive: false },
  { name: "Roles", icon: "shield", isActive: false },
  { name: "Exercises", icon: "dumbbell", isActive: false },
  { name: "Workouts", icon: "trending-up", isActive: false },
  { name: "Goals", icon: "target", isActive: false },
  { name: "Settings", icon: "settings", isActive: false }
];

export const Dashboard = () => {
    return (
       <MainScreen className="p-4 gap-3">
            <SideBar buttons={buttons}/>
            <div className="h-full w-17/20 bg-white/10 backdrop-blur-lg rounded-2xl"></div>
        </MainScreen>
    )
}