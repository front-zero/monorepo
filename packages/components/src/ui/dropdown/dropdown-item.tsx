import { FC } from "react";
import clsx from "clsx";
import Anchor from "../anchor";

interface IDropItem {
    path: string;
    className?: string;
    active?: boolean;
}

const DropdownItem: FC<IDropItem> = ({ children, path, className, active }) => {
    const itemClass =
        "flex items-center justify-content py-[0.375rem] px-2 text-heading text-left";
    const activeClass = active && "bg-primary !text-white";
    const hoverClass = !active && "hover:bg-gray-300 focus:bg-gray-300";
    return (
        <Anchor
            path={path}
            className={clsx(
                className,
                "dropdown-item",
                itemClass,
                activeClass,
                hoverClass
            )}
        >
            {children}
        </Anchor>
    );
};

export default DropdownItem;
