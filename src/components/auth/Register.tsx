import { Input } from "../common";

interface IRegisterProps{
    goToDashboard: () => void;
}

export const Register = ({goToDashboard}:IRegisterProps) =>{
    return(
        <div className="justify-start flex flex-col w-10/12 h-auto">
          <form className=" flex flex-col gap-3">
            <div className="flex gap-2">
             <Input type="text" placeholder="Name" label="First Name"/>
             <Input type="text" placeholder="Name" label="Last Name"/>
            </div>
            <div className="flex gap-2">
             <Input type="text" placeholder="Username" label="Username"/>
             <Input type="email" placeholder="example@yahoo.com" label="Email"/>
            </div>
            <div className="flex gap-2">
                <div className="block text-sm w-full">
                    <span className="mb-2 block text-slate-400">Gender</span>
                        <div className="flex gap-2">
                            <label className="flex-1">
                                <input type="radio" name="gender" value="male" className="peer hidden"required/>
                                    <div className="bg-slate-700 border border-white/30 h-10 rounded-2xl flex items-center justify-center text-md cursor-pointer peer-checked:bg-purple-500 peer-checked:text-white">
                                        Male
                                    </div>
                            </label>
                            <label className="flex-1">
                                <input type="radio" name="gender" value="female" className="peer hidden" />
                                    <div className="bg-slate-700 border border-white/30 h-10 rounded-2xl flex items-center justify-center text-md cursor-pointer peer-checked:bg-purple-500 peer-checked:text-white">
                                        Female
                                    </div>
                            </label>
                            <label className="flex-1">
                                <input type="radio" name="gender" value="other" className="peer hidden" />
                                    <div className="bg-slate-700 border border-white/30 h-10 rounded-2xl flex items-center justify-center text-md cursor-pointer peer-checked:bg-purple-500 peer-checked:text-white">
                                        Other
                                    </div>
                            </label>
                        </div>
                </div>
            </div>
            <div className="flex gap-2">
             <Input type="number" placeholder="170" label="Height"/>
             <Input type="number" placeholder="80" label="Weight"/>
             <Input type="date" placeholder="" label="Date of birth"/>
            </div>
            <div className="flex gap-2">
             <Input type="password" placeholder="••••••••" label="Password"/>
             <Input type="password" placeholder="••••••••" label="Confirm password"/>
            </div>
            <button className="bg-core-slate hover:bg-power-purple transition duration-200 w-auto h-auto p-2 rounded-3xl hover:cursor-pointer"
            onClick={goToDashboard}>
                Register
            </button>
          </form>
        </div>
    )
}