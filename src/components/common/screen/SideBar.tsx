import type { SideBarButton } from "../../../models";
import { ButtonWithIcon } from "..";
import { useNavigate } from "react-router-dom";

interface ISideBarProps {
  buttons: SideBarButton[];
}

const buttonCss =
  "hover:bg-power-purple transition duration-200 rounded-xl hover:cursor-pointer text-lg text-white/90 h-10 flex items-center px-3 gap-2 py-2 ";

export const SideBar = ({ buttons }: ISideBarProps) => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-3/20 bg-slate-700 rounded-2xl flex flex-col p-4">
      <h1 className="text-3xl text-slate-300">RepWitness</h1>
      <h3 className="text-sm text-slate-400">Track. Connect. Improve.</h3>
      <div className="flex flex-col mt-4 gap-2">
        {buttons.map((button, index) => {
          return (
            <ButtonWithIcon
              icon={button.icon}
              content={button.name}
              key={index}
              isActive={button.isActive}
              activeStyle="bg-power-purple"
              onBtnClick={()=>{navigate(button.link)}}/>
          );
        })}
      </div>
      <div className="w-full h-24 pt-2 border-t border-white/40 mt-auto flex flex-col gap-2">
        <button className={buttonCss + " w-full"}>Help</button>
        <button className={buttonCss + " w-full"} onClick={()=>{navigate('/')}}>LogOut</button>
      </div>
    </div>
  );
};
