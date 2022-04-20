import { FC } from "react";
import clsx from "clsx";

interface IBreadcrumb {
    /**
     * Extra class name
     */
    className?: string;
}

const Breadcrumb: FC<IBreadcrumb> = ({ children, className, ...restProps }) => {
    return (
        <ol
            className={clsx(
                className,
                "breadcrumb flex flex-wrap px-4 py-3 list-none bg-gray-300 rounded"
            )}
            {...restProps}
        >
            {children}
        </ol>
    );
};

export default Breadcrumb;
