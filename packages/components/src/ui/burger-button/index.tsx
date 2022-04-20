import clsx from "clsx";

interface IProps {
    label: string;
    onClick: () => void;
    className?: string;
}

const BurgerButton = ({ label, onClick, className }: IProps) => {
    const spanClass = "absolute bg-black rounded-sm left-0 block h-0.5 w-full";
    return (
        <button
            className={clsx(
                "burger-btn h-3.5 relative -top-px w-[22px]",
                className
            )}
            type="button"
            aria-label={label}
            onClick={onClick}
        >
            <span className={clsx(spanClass, "top-0")}></span>
            <span
                className={clsx(spanClass, "top-1/2 -translate-y-1/2")}
            ></span>
            <span className={clsx(spanClass, "bottom-0")}></span>
        </button>
    );
};

export default BurgerButton;
