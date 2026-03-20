import type { CardPropsModel } from "../../../models";

interface ICardProps {
  title: string;
  props: CardPropsModel[];
}

export const Card = ({ title, props }: ICardProps) => {
  return (
    <div className="h-1/2 w-full flex flex-col gap-3 p-4 bg-slate-700 rounded-2xl">
      <div className="h-1/10 w-full flex justify-center">
        <div className="h-full w-1/2">
          <h1 className="text-xl text-white">{title}</h1>
        </div>
        <div className="h-full w-1/2 flex justify-end">
          <button className="text-md text-white/50">View all</button>
        </div>
      </div>
      {props.map((prop, index) => {
        return (
          <div
            className="h-3/10 w-full rounded-2xl flex flex-col gap-1 p-2 bg-slate-800"
            key={index}
          >
            <div className="h-1/3 w-full">
              <h1 className="text-lg text-white font-semibold">
                {prop.firstElement}
              </h1>
            </div>
            <div className="h-1/3 w-full">
              <h1 className="text-sm text-white/60">
                {prop.secondElement}
              </h1>
            </div>
            <div className="h-1/3 w-full">
              <h1 className="text-sm text-white/60">
                {prop.thirdElement}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};
