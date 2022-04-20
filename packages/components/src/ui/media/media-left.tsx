import { FC } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
    alignMent?: "top" | "middle" | "end";
}
const MediaLeft: FC<IProps> = ({ className, alignMent, children }) => {
    return (
        <div
            className={clsx(
                "media-left",
                alignMent === "middle" && "self-center",
                alignMent === "end" && "self-end",
                className
            )}
        >
            {children}
        </div>
    );
};
MediaLeft.defaultProps = {
    alignMent: "top",
};

export default MediaLeft;
