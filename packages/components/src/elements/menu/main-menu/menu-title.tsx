import { FC } from "react";

const MenuTitle: FC = ({ children }) => {
    return (
        <h6 className="text-primary border-b border-b-gray-300 pb-[5px] mb-[0.938rem] text-[11px] tracking-wider text-left uppercase">
            {children}
        </h6>
    );
};

export default MenuTitle;
