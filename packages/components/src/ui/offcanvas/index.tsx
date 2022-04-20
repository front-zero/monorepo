import { FC } from "react";
import clsx from "clsx";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

const Offcanvas: FC<IProps> = ({ isOpen, onClose, children, className }) => {
    return (
        <div
            className={clsx(
                "fixed inset-0 z-50 overflow-y-hidden bg-black/70 cursor-crosshair transition-[visibility] duration-200",
                !isOpen && "invisible",
                isOpen && "visible"
            )}
            onClick={onClose}
            onKeyPress={(e) => e}
            role="button"
            tabIndex={-1}
        >
            <div
                className={clsx(
                    "offcanvas w-[18.75rem] h-full ml-auto overflow-x-hidden overflow-y-auto bg-gray-500 cursor-auto transition-transform duration-300",
                    !isOpen && "translate-x-[120%]",
                    isOpen && "translate-x-0",
                    className
                )}
                onClick={(e) => e.stopPropagation()}
                onKeyPress={(e) => e}
                role="button"
                tabIndex={-1}
            >
                {children}
            </div>
        </div>
    );
};

export { default as OffcanvasHeader } from "./header";
export { default as OffcanvasBody } from "./body";

export default Offcanvas;
