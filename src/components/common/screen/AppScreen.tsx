import { Home, Dumbbell, TrendingUp, Target, Settings } from "lucide-react";
import type { ReactNode } from "react";
import type { SideBarButton } from "../../../models";
import { SideBar } from "./SideBar";
import { MainScreen } from "./MainScreen";

interface IAppScreenProps {
  className?: string;
  children: ReactNode;
}

const buttons: SideBarButton[] = [
  { name: "Dashboard", icon: <Home />, isActive: true },
  { name: "Exercises", icon: <Dumbbell />, isActive: false },
  { name: "Workouts", icon: <TrendingUp />, isActive: false },
  { name: "Goals", icon: <Target />, isActive: false },
  { name: "Settings", icon: <Settings />, isActive: false },
];

export const AppScreen = ({ className = "", children }: IAppScreenProps) => {
  return (
    <MainScreen className={className}>
      <div className="bg-white/10 backdrop-blur-lg h-full w-full p-2 rounded-2xl flex gap-3">
        <SideBar buttons={buttons} />
        {children}
      </div>
    </MainScreen>
  );
};
