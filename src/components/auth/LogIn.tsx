interface ILogInProps{
    goToDashboard: () => void;
}


export const LogIn = ({goToDashboard}:ILogInProps) =>{
    return(
        <div className="justify-start flex flex-col w-10/12 h-auto">
          <form className=" flex flex-col gap-3">
            <label className="block text-sm">
              <span className="mb-2 block text-slate-400">Email</span>
              <input
                required
                type="email"
                className="bg-slate-700 border border-white/30 w-full h-10 rounded-2xl px-4 text-md"
                placeholder="example@yahoo.com"
                autoComplete="false"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-2 block text-slate-400">Password</span>
              <input
                required
                type="password"
                className="bg-slate-700 border border-white/30 w-full h-10 rounded-2xl px-4 text-md"
                placeholder="••••••••"
                autoComplete="false"
              />
            </label>
            <button className="bg-core-slate hover:bg-power-purple transition duration-200 w-auto h-auto p-2 rounded-3xl hover:cursor-pointer"
            onClick={goToDashboard}>
                LogIn
            </button>
          </form>
        </div>
    )
}