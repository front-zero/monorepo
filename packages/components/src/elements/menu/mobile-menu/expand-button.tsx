import { MouseEvent } from "react";
import clsx from "clsx";
interface IProps {
    className?: string;
    onClick: (e: MouseEvent) => void;
}

const ExpandButton = ({ className, onClick }: IProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={clsx(
                className,
                "menu-expand absolute right-0 top-0 w-9 h-9 text-center bg-gray-600 text-gray-50 text-lg"
            )}
        >
            <i className="icon fa fa-angle-down" />
        </button>
    );
};

export default ExpandButton;
