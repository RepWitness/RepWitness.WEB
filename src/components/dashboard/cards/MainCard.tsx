interface IMainCarsProps {
  title: string;
  content: string;
  bgColor?: string;
}

export const MainCard = ({
  title,
  content,
  bgColor = "bg-slate-700",
}: IMainCarsProps) => {
  return (
    <div
      className={
        "w-1/4 h-full rounded-2xl flex flex-col p-4 justify-center gap-1" +
        " " +
        bgColor
      }
    >
      <h1 className="text-lg text-white/50 font-semibold">{title}</h1>
      <p className="text-3xl text-white font-bold">{content}</p>
    </div>
  );
};
