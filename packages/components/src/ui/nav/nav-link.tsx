import { FC, MouseEvent } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
    active?: string;
    onClick: (event: MouseEvent) => void;
    layout?: 1 | 2;
    title?: string;
}

const NavLink: FC<IProps> = ({
    children,
    className,
    active,
    onClick,
    layout,
    title,
}) => {
    const beforeClass =
        "before:content-[''] before:top-0 before:left-0 before:height-full before:border-l before:border-ghost";
    const layoutOneClass = "font-medium text-body before:mx-3.8";
    const layoutTwoClass = "font-bold text-trout before:mx-[10px]";

    return (
        <button
            type="button"
            title={title}
            className={clsx(
                "nav-link relative uppercase text-xs",
                beforeClass,
                layout === 1 && layoutOneClass,
                layout === 2 && layoutTwoClass,
                "first:before:hidden",
                className,
                active === title && "!text-primary"
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

NavLink.displayName = "NavLink";

NavLink.defaultProps = {
    layout: 1,
};

export default NavLink;
