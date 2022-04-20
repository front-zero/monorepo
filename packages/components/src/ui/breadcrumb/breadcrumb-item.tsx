import { FC } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface IBreadcrumbItem {
    path?: string;
    active?: boolean;
    className?: string;
}

const BreadcrumbItem: FC<IBreadcrumbItem> = ({
    children,
    path,
    active,
    className,
}) => {
    const beforeClass =
        "before:inline-block before:pr-2 before:text-ghost before:content-['/']";
    return (
        <li
            className={clsx(
                className,
                "breadcrumb-item pl-2 first:pl-0 first:before:hidden",
                beforeClass
            )}
            aria-current={active && "page"}
        >
            {!active && path && (
                <Link className="text-primary capitalize" to={path}>
                    {children}
                </Link>
            )}
            {active && (
                <span className={clsx(active && "text-pale capitalize")}>
                    {children}
                </span>
            )}
        </li>
    );
};

export default BreadcrumbItem;
