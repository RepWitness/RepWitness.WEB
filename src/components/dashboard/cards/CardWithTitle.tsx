import type { ReactNode } from "react"

interface ICardWithTitleProps{
    title: string
    size?: string
    children: ReactNode
}

export const CardWithTitle = ({title, size = "w-full h-3/10", children}:ICardWithTitleProps) =>{
    return (
        <div className={"bg-slate-700 rounded-2xl flex flex-col gap-2 p-4"+ " " + size }>
            <div className="w-full h-3/20 text-2xl text-white/90">{title}</div>
            <div className="w-full h-17/20 flex gap-2">
              {children}
            </div>
          </div>
    )
}