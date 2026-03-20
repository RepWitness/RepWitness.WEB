interface IExerciseCard {
  index: number;
  title: string;
  size?: string;
  description: string;
}

export const ExerciseCard = ({
  index,
  title,
  size = "w-1/4",
  description,
}: IExerciseCard) => {
  return (
    <div
      className={
        "h-full w-1/4 bg-slate-800 rounded-2xl flex p-2 gap-2 justify-center items-center" +
        " " +
        size
      }
    >
      <div className="h-26 w-26 bg-bench-press bg-cover rounded-2xl"></div>
      <div className="h-full w-1/2 flex flex-col gap-2 p-2 justify-center">
        <h1 className="text-md text-white/90">
          {index}. {title}
        </h1>
        <h1 className="text-sm text-white/90">{description}</h1>
      </div>
    </div>
  );
};
