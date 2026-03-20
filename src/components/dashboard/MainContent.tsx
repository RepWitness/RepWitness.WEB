import { UserCircle } from "lucide-react";
import { QuoteOfTheMoment } from "./QuoteOfTheMoment";
import { ButtonWithIcon } from "../common";
import { Card, MainCard } from "./cards";
import {
  goalsCardElements,
  scheduleCardElements,
  workouts,
} from "../../dummydata";

export const MainContent = () => {
  return (
    <div className="h-full w-17/20 rounded-2xl flex flex-col gap-2">
      <div className="w-full h-1/10 bg-slate-700 rounded-2xl flex">
        <div className="h-full w-2/10 px-4 flex flex-col justify-center">
          <h1 className="text-md text-white/30">Good Morning!</h1>
          <h1 className="text-xl text-white/80">Welcome back!</h1>
        </div>
        <QuoteOfTheMoment />
        <div className="h-full w-2/10 flex justify-end items-center px-4">
          <ButtonWithIcon
            className="bg-power-purple rounded-xl w-full text-xl text-white/90 h-7/10 flex items-center px-3 py-2 gap-3 border border-power-purple"
            icon={<UserCircle />}
            content="Bolba-Mateescu Andrei"
            hoverClassName="hover:bg-slate-700 hover:border hover:border-power-purple"
          />
        </div>
      </div>
      <div className="w-full h-9/10 flex gap-2 rounded-2xl">
        <div className="h-full w-15/20 rounded-2xl flex flex-col gap-2">
          <div className="w-full h-1/10 bg-slate-700 rounded-2xl px-4 py-1">
            <h1 className="text-2xl text-white font-semibold">
              Track your daily activities
            </h1>
            <p className="text-md text-white/50">
              Monitor workouts, cardio and daily movement with one clean app.
            </p>
          </div>
          <div className="w-full h-2/10 rounded-2xl flex gap-2">
            <MainCard title="Workouts" content="6 workouts" />
            <MainCard title="Workouts" content="6 workouts" />
            <MainCard title="Workouts" content="6 workouts" />
            <MainCard title="Workouts" content="6 workouts" />
          </div>
          <div className="w-full h-3/10 bg-slate-700 rounded-2xl flex flex-col gap-2 p-4">
            <div className="w-full h-3/20 text-2xl text-white/90">Popular exercises</div>
            <div className="w-full h-17/20 flex gap-2">
              <div className="h-full w-1/4 bg-slate-800 rounded-2xl flex p-2 gap-2 justify-center items-center">
                <div className="h-26 w-26 bg-bench-press bg-cover rounded-2xl"></div>
                <div className="h-full w-1/2 flex flex-col gap-2 p-2 justify-center">
                  <h1 className="text-md text-white/90">1. Bench Press</h1>
                  <h1 className="text-sm text-white/90">34 people used it</h1>
                </div>
              </div>
              <div className="h-full w-1/4 bg-slate-800 rounded-2xl flex p-2 gap-2 justify-center items-center">
                <div className="h-26 w-26 bg-bench-press bg-cover rounded-2xl"></div>
                <div className="h-full w-1/2 flex flex-col gap-2 p-2 justify-center">
                  <h1 className="text-md text-white/90">1. Bench Press</h1>
                  <h1 className="text-sm text-white/90">34 people used it</h1>
                </div>
              </div>
              <div className="h-full w-1/4 bg-slate-800 rounded-2xl flex p-2 gap-2 justify-center items-center">
                <div className="h-26 w-26 bg-bench-press bg-cover rounded-2xl"></div>
                <div className="h-full w-1/2 flex flex-col gap-2 p-2 justify-center">
                  <h1 className="text-md text-white/90">1. Bench Press</h1>
                  <h1 className="text-sm text-white/90">34 people used it</h1>
                </div>
              </div>
              <div className="h-full w-1/4 bg-slate-800 rounded-2xl flex p-2 gap-2 justify-center items-center">
                <div className="h-26 w-26 bg-bench-press bg-cover rounded-2xl"></div>
                <div className="h-full w-1/2 flex flex-col gap-2 p-2 justify-center">
                  <h1 className="text-md text-white/90">1. Bench Press</h1>
                  <h1 className="text-sm text-white/90">34 people used it</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-4/10 bg-slate-700 rounded-2xl flex flex-col gap-2 p-4">
            <div className="w-full h-3/20 text-2xl text-white/90">Workout</div>
            <div className="w-full h-17/20">
              <table className="min-w-full text-left text-sm">
                <thead className="text-slate-300">
                  <tr>
                    <th className="px-2 py-2">Workout</th>
                    <th className="px-2 py-2">Type</th>
                    <th className="px-2 py-2">Time</th>
                    <th className="px-2 py-2">Duration</th>
                    <th className="px-2 py-2">Calories</th>
                    <th className="px-2 py-2">Effort</th>
                  </tr>
                </thead>
                <tbody>
                  {workouts.map((item) => (
                    <tr
                      key={item.name}
                      className="border-t border-white/10 text-slate-100"
                    >
                      <td className="px-2 py-2 font-medium">{item.name}</td>
                      <td className="px-2 py-2">{item.type}</td>
                      <td className="px-2 py-2">{item.time}</td>
                      <td className="px-2 py-2">{item.duration}</td>
                      <td className="px-2 py-2">{item.kcal}</td>
                      <td className="px-2 py-2">{item.effort}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="h-full w-5/20 rounded-2xl flex flex-col gap-3">
          <Card title="My schedule" props={scheduleCardElements} />
          <Card title="My goals" props={goalsCardElements} />
        </div>
      </div>
    </div>
  );
};
