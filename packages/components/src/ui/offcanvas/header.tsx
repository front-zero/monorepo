import { FC } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const OffcanvasHeader: FC<IProps> = ({ children, className }) => {
    return (
        <div
            className={clsx(
                "offcanvas-header py-3.8 px-[1.875rem] flex items-center justify-between",
                className
            )}
        >
            {children}
        </div>
    );
};

export default OffcanvasHeader;
