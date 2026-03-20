import { UserCircle } from "lucide-react";
import {
  popularExercises,
  WorkoutHeadElements,
  workouts,
  scheduleCardElements,
  goalsCardElements,
} from "../../dummydata";
import { AppScreen, ButtonWithIcon, GenericTable} from "../common";
import { MainCard, CardWithTitle, ExerciseCard, Card } from "./cards";
import { QuoteOfTheMoment } from "./QuoteOfTheMoment";

export const Dashboard = () => {
  return (
    <AppScreen className="p-4">
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
            <CardWithTitle title="Popular exercises">
              {popularExercises.map((elem, index) => {
                return (
                  <ExerciseCard
                    index={index}
                    title={elem.title}
                    description={elem.description}
                    key={index}
                  />
                );
              })}
            </CardWithTitle>
            <CardWithTitle title="Last Workouts" size="h-4/10">
              <GenericTable
                headElements={WorkoutHeadElements}
                data={workouts}
              />
            </CardWithTitle>
          </div>
          <div className="h-full w-5/20 rounded-2xl flex flex-col gap-3">
            <Card title="My schedule" props={scheduleCardElements} />
            <Card title="My goals" props={goalsCardElements} />
          </div>
        </div>
      </div>
    </AppScreen>
  );
};
