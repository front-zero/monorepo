import { FC } from "react";
import clsx from "clsx";

interface IProps {
    onClick: () => void;
    label: string;
    className?: string;
}

const HamburgerButton: FC<IProps> = ({ onClick, label, className }) => {
    return (
        <button
            type="button"
            aria-label={label}
            onClick={onClick}
            className={clsx(
                "w-[45px] h-[45px] flex items-center justify-center text-xl text-white/75 bg-ghost absolute top-[22px] right-3.8",
                className
            )}
        >
            <i className="icon ion-navicon-round" />
        </button>
    );
};

export default HamburgerButton;
