import { FC } from "react";
import clsx from "clsx";

interface IProps {
    icon: string;
    iconColor: string;
    onClick: () => void;
}

const NavLink: FC<IProps> = ({ icon, iconColor, onClick, children }) => (
    <button
        onClick={onClick}
        className="bg-white border border-ghost text-heading w-full flex justify-center items-center h-[50px] uppercase font-bold text-sm tracking-wider py-2 px-4"
    >
        <i
            className={clsx("leading-none text-2xl mr-[10px]", icon, iconColor)}
        />{" "}
        {children}
    </button>
);

export default NavLink;
