import { FC } from "react";
import clsx from "clsx";

interface IDropMenu {
    show?: boolean;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
    shape?: boolean;
}

const DropdownMenu: FC<IDropMenu> = ({
    children,
    show,
    direction,
    shape,
    className,
    ...restProps
}) => {
    const dropclass =
        "absolute z-50 min-w-fit bg-white border border-geyser rounded p-1 shadow shadow-secondary/20";
    const downclass = direction === "down" && "left-0 top-full mt-1";
    const upclass = direction === "up" && "left-0 bottom-full mb-1";
    const leftclass = direction === "left" && "right-full top-0";
    const rightclass = direction === "right" && "left-full top-0";
    const topAfterClass =
        shape &&
        "mt-[7px] after:absolute after:content-[''] after:border-8 after:border-transparent after:border-b-white after:right-[1.625rem] after:-top-[0.938rem] after:z-10";
    const topBeforeClass =
        shape &&
        "before:absolute before:content-[''] before:border-8 before:border-transparent before:border-b-gray-600 before:-top-4 before:right-[1.625rem] before:z-10";

    return (
        <div
            className={clsx(
                className,
                "dropdown-menu",
                show ? "block" : "hidden",
                dropclass,
                downclass,
                upclass,
                leftclass,
                rightclass,
                direction === "down" && [topAfterClass, topBeforeClass]
            )}
            {...restProps}
        >
            {children}
        </div>
    );
};

DropdownMenu.displayName = "DropdownMenu";

export default DropdownMenu;
