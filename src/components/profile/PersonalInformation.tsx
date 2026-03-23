import { Edit } from "lucide-react";
import { personalInformation } from "../../dummydata/profile";

export const PersonalInformation = () => {
  return (
    <div className="h-3/10 w-full bg-slate-700 rounded-2xl flex flex-col gap-2 p-6">
      <div className="h-5/20 w-full flex">
        <div className="h-full w-full border-b border-white/40 flex">
          <h1 className="h-full w-9/10 text-2xl text-white/90">
            Personal Information
          </h1>
          <div className="h-full w-1/10 flex flex-col">
            <button className="bg-slate-800 text-white/90 rounded-2xl py-1 hover:bg-slate-950 transition duration-200 flex justify-center gap-2">
              <Edit className="w-4 text-white/90" />
              Edit
            </button>
          </div>
        </div>
      </div>
      {[0, 1].map((row) => (
        <div className="w-full h-15/20 flex gap-4 py-4" key={row}>
          {personalInformation
            .slice(row * 5, row * 5 + 5)
            .map((item, index) => {
              return (
                <div
                  className="h-full w-1/5 flex flex-col gap-2"
                  key={index}
                >
                  <h1 className="text-white/60">{item.label}</h1>
                  <h1 className="text-white/80 font-bold">{item.value}</h1>
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
};
