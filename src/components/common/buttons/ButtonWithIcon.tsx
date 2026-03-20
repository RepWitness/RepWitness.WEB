import type { ReactNode } from "react";

interface IButtonWithIconProps {
  className?: string;
  hoverClassName?: string;
  icon: ReactNode;
  content: string;
  isActive?: boolean;
  activeStyle?: string;
}

export const ButtonWithIcon = ({
  className,
  hoverClassName = "",
  icon,
  content,
  isActive,
  activeStyle = "",
}: IButtonWithIconProps) => {
  const defaultClass =
    "hover:bg-power-purple transition duration-200 rounded-xl cursor-pointer text-lg text-white/90 h-10 flex items-center px-3 gap-2 py-2";

  let finalClass = className || `${defaultClass}` 
  finalClass += ` ${hoverClassName} ${isActive ? activeStyle : ""}`;

  return (
    <button className={finalClass}>
      {icon}
      {content}
    </button>
  );
};