interface ICardElementProps {
  firstElement: string;
  secondElement: string;
  thirdElement: string;
}

export const CardElement = ({
  firstElement,
  secondElement,
  thirdElement,
}: ICardElementProps) => {
  return (
    <div className="h-3/10 w-full rounded-2xl flex flex-col gap-1 p-2 bg-slate-800">
      <div className="h-1/3 w-full">
        <h1 className="text-lg text-white font-bold">{firstElement}</h1>
      </div>
      <div className="h-1/3 w-full">
        <h1 className="text-sm text-white/60 font-bold">{secondElement}</h1>
      </div>
      <div className="h-1/3 w-full">
        <h1 className="text-sm text-white/60 font-bold">{thirdElement}</h1>
      </div>
    </div>
  );
};
