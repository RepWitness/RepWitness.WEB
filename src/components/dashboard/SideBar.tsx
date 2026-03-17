import type { SideBarButton } from "../../models"

interface ISideBarProps{
    buttons: SideBarButton[]
}

export const SideBar = ({buttons}:ISideBarProps) =>{
    return(
        <div className="h-full w-3/20 bg-slate-700 rounded-2xl flex flex-col p-4">
            <h1 className="text-3xl text-slate-300">RepWitness</h1>
            <h3 className="text-sm text-slate-400">Track. Connect. Improve.</h3>
            <div className="flex flex-col mt-4 gap-2">
            {buttons.map((button, index) => {
                return (
                    <button 
                   className={
                    "hover:bg-power-purple transition duration-200 rounded-xl hover:cursor-pointer text-xl text-white/90 h-10 flex flex-col justify-center px-3 items-start " +
                    (button.isActive ? "bg-power-purple" : "")
                    }
                    key={index}>
                        {button.name}
                    </button>
                )})}
        </div>
        </div>
    )
}