interface IRegisterProps{
    goToDashboard: () => void;
}

export const Register = ({goToDashboard}:IRegisterProps) =>{
    return(
        <div className="justify-start flex flex-col w-10/12 h-auto">
          <form className=" flex flex-col gap-3">
            <div className="flex gap-2">
             <label className="block text-sm">
              <span className="mb-2 block text-slate-400">First name</span>
              <input
                required
                type="text"
                className="bg-slate-700 border border-white/30 w-full h-10 rounded-2xl px-4 text-md"
                placeholder="Name"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-slate-400">Last name</span>
              <input
                required
                type="text"
                className="bg-slate-700 border border-white/30 w-full h-10 rounded-2xl px-4 text-md"
                placeholder="Name"
              />
            </label>
            </div>
            <div className="flex gap-2">
                <label className="block text-sm">
              <span className="mb-2 block text-slate-400">Username</span>
                <input
                    required
                    type="email"
                    className="bg-slate-700 border border-white/30 w-full h-10 rounded-2xl px-4 text-md"
                    placeholder="username"
                />
                </label>
                <label className="block text-sm">
                <span className="mb-2 block text-slate-400">Email</span>
                <input
                    required
                    type="email"
                    className="bg-slate-700 border border-white/30 w-full h-10 rounded-2xl px-4 text-md"
                    placeholder="example@yahoo.com"
                />
                </label>
            </div>
            <div className="flex gap-2">
                <div className="block text-sm w-full">
                    <span className="mb-2 block text-slate-400">Gender</span>
                        <div className="flex gap-2">
                            <label className="flex-1">
                                <input
                                type="radio"
                                name="gender"
                                value="male"
                                className="peer hidden"
                                required
                                />
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
             <label className="block text-sm">
              <span className="mb-2 block text-slate-400">Height</span>
              <input
                required
                type="number"
                className="bg-slate-700 border border-white/30 w-full h-10 rounded-2xl px-4 text-md"
                placeholder="170"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-slate-400">Width</span>
              <input
                required
                type="number"
                className="bg-slate-700 border border-white/30 w-full h-10 rounded-2xl px-4 text-md"
                placeholder="80"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-slate-400">Date of birth</span>
              <input
                required
                type="date"
                className="bg-slate-700 border border-white/30 w-full h-10 rounded-2xl px-4 text-md"
              />
            </label>
            </div>
             <div className="flex gap-2">
            <label className="block text-sm">
              <span className="mb-2 block text-slate-400">Password</span>
              <input
                required
                type="password"
                className="bg-slate-700 border border-white/30 w-full h-10 rounded-2xl px-4 text-md"
                placeholder="••••••••"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-slate-400">Confirm password</span>
              <input
                required
                type="password"
                className="bg-slate-700 border border-white/30 w-full h-10 rounded-2xl px-4 text-md"
                placeholder="••••••••"
              />
            </label>
              </div>
            <button className="bg-core-slate hover:bg-power-purple transition duration-200 w-auto h-auto p-2 rounded-3xl hover:cursor-pointer"
            onClick={goToDashboard}>
                Register
            </button>
          </form>
        </div>
    )
}