import type { ReactNode } from "react";

interface IMainScreenProps{
    className?: string,
    children: ReactNode
}

export const MainScreen = ({ className = "", children }:IMainScreenProps) => {
  return (
    <div className={"h-screen w-screen bg-linear-to-br from-power-purple to-core-slate flex "+ className}>
      {children}
    </div>
  );
};