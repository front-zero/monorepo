import { FC } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
}

const CardImageOverlay: FC<IProps> = ({ className, children }) => {
    return (
        <div
            className={clsx(
                "col-[1/-1] row-[1/-1] w-full h-full bg-black/50",
                className
            )}
        >
            {children}
        </div>
    );
};

export default CardImageOverlay;
