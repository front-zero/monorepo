import { FC } from "react";
import clsx from "clsx";

export interface IFeedback {
    state?: "success" | "warning" | "error";
    showErrorOnly?: boolean;
}

const Feedback: FC<IFeedback> = ({ state, showErrorOnly, children }) => {
    return (
        <span
            className={clsx(
                "w-full block mt-1 text-xs",
                state !== "error" && showErrorOnly && "hidden",
                state === "success" && !showErrorOnly && "text-success",
                state === "warning" && !showErrorOnly && "text-warning",
                state === "error" && "text-danger"
            )}
        >
            {children}
        </span>
    );
};

export default Feedback;
