import type { ReactNode } from "react";
import { SideBar } from "../../dashboard";
import type { SideBarButton } from "../../../models";
import { Home, User, Shield, Dumbbell, TrendingUp, Target, Settings } from "lucide-react";

interface IMainScreenProps {
  className?: string;
  children: ReactNode;
}

const buttons: SideBarButton[] = [
  { name: "Dashboard", icon: <Home/>, isActive: true },
  { name: "Users", icon: <User/>, isActive: false },
  { name: "Roles", icon: <Shield/>, isActive: false },
  { name: "Exercises", icon: <Dumbbell/>, isActive: false },
  { name: "Workouts", icon: <TrendingUp/>, isActive: false },
  { name: "Goals", icon: <Target/>, isActive: false },
  { name: "Settings", icon: <Settings/>, isActive: false }
];

export const MainScreen = ({ className = "", children }: IMainScreenProps) => {
  return (
    <div
      className={
        "h-screen w-screen bg-linear-to-br from-power-purple to-core-slate flex " +
        className
      }
    >
      <div className="bg-white/10 backdrop-blur-lg h-full w-full p-2 rounded-2xl flex gap-3">
        <SideBar buttons={buttons} />
        {children}
      </div>
    </div>
  );
};
