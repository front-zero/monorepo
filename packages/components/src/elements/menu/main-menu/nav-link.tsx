import { FC } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import Anchor from "../../../ui/anchor";

interface IProps {
    /**
     * Menu Label
     */
    label: string;
    /**
     * Menu Link
     */
    path: string;
    /**
     * Icon ClassName
     */
    icon?: string;
    /**
     * Pass true if the item has children
     */
    hasChildren?: boolean;
    /**
     * Pass extra classes
     */
    className?: string;
}

const NavLink: FC<IProps> = ({ label, path, icon, hasChildren, className }) => {
    const location = useLocation();
    const active = location.pathname === path;

    const baseClass =
        "uppercase text-sm tracking-wider font-medium h-[2.875rem] flex items-center justify-center border border-r-0 border-geyser";
    const defaultClass = !active && "bg-white text-nevada";
    const activeClass =
        active &&
        "bg-primary text-white bg-gradient-to-r from-primary to-primary-500 bg-repeat-x	border-primary";
    const hoverClass =
        !active &&
        "hover:bg-gray-200 hover:text-heading focus:bg-gray-200 focus:text-heading";

    return (
        <Anchor
            path={path}
            className={clsx(
                "nav-link",
                baseClass,
                defaultClass,
                activeClass,
                hoverClass,
                className
            )}
        >
            {icon && (
                <i
                    className={clsx(
                        icon,
                        "text-2xl lg:mr-2",
                        !active && "text-primary",
                        active && "text-white"
                    )}
                />
            )}

            <span>{label}</span>
            {hasChildren && (
                <i className="fa fa-angle-down font-normal opacity-70 ml-1 lg:ml-2" />
            )}
        </Anchor>
    );
};

NavLink.displayName = "NavLink";

export default NavLink;
