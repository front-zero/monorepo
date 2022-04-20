import { FC, useEffect, useRef } from "react";
import clsx from "clsx";
import { Link, useSearchParams } from "react-router-dom";

interface IProps {
    path: string;
    className?: string;
    type: string;
}

const NavLink: FC<IProps> = ({ path, children, className, type }) => {
    const [searchParams] = useSearchParams();
    const active = useRef<boolean>();
    useEffect(() => {
        for (const entry of searchParams.entries()) {
            const [_param, value] = entry;
            active.current = value === path;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    const activeClass =
        "bg-white text-primary before:opacity-100 before:bg-primary before:bg-gradient-to-b before:from-primary before:to-purple-150";

    return (
        <Link
            to={`?${type}=${path}`}
            className={clsx(
                "flex w-full items-center justify-between capitalize h-[45px] bg-gray-200 text-body relative px-5 border-t border-t-geyser first:border-t-0 before:absolute before:content-[''] before:top-0 before:-left-px before:w-[3px] before:h-full before:opacity-0 before:transition-all before:bg-ghost hover:before:opacity-100 focus:before:opacity-100",
                active.current && activeClass,
                path === "all" && active.current === undefined && activeClass,
                className
            )}
        >
            {children}
        </Link>
    );
};

export default NavLink;
