import { FC } from "react";
import clsx from "clsx";

export interface ProgressProps {
    /**
     * Current value of progress
     */
    now: number;
    /**
     * Minimum value progress can begin from
     */
    min?: number;
    /**
     * Maximum value progress can reach
     */
    max?: number;
    /**
     * Show label that represents visual percentage. EG. 60%
     */
    isLabel?: boolean;
    /**
     * Optional. Default is `primary`.
     */
    color?:
        | "primary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "indigo"
        | "purple"
        | "orange"
        | "pink";
    /**
     * Optional. Default is `md`.
     */
    size?: "xxs" | "xs" | "sm" | "md" | "lg";
    /**
     * Uses a gradient to create a striped effect.
     */
    striped?: boolean;
    /**
     * Extra Class Name
     */
    className?: string;
}

const Progress: FC<ProgressProps> = ({
    className,
    now,
    min,
    max,
    isLabel,
    color,
    size,
    striped,
    ...restProps
}) => {
    const colorClass = [
        color === "primary" && "bg-primary",
        color === "success" && "bg-success",
        color === "danger" && "bg-danger",
        color === "warning" && "bg-warning",
        color === "info" && "bg-info",
        color === "indigo" && "bg-indigo",
        color === "purple" && "bg-purple",
        color === "orange" && "bg-orange",
        color === "pink" && "bg-pink",
    ];
    const sizeClass = [
        size === "xxs" && "h-[2px]",
        size === "xs" && "h-[5px]",
        size === "sm" && "h-[10px]",
        size === "md" && "h-[15px]",
        size === "lg" && "h-[20px]",
    ];
    return (
        <div className={clsx("progress bg-gray-300", className)} {...restProps}>
            <div
                role="progressbar"
                aria-valuenow={now}
                aria-valuemin={min}
                aria-valuemax={max}
                style={{ width: `${now}%` }}
                className={clsx(
                    "progress-bar  flex items-center justify-center transition-[width] duration-700",
                    color && colorClass,
                    size && sizeClass,
                    striped && "bg-white-striped bg-[length:1rem_1rem]"
                )}
            >
                <span
                    className={!isLabel ? "sr-only" : "text-white text-[11px]"}
                >
                    {now}%
                </span>
            </div>
        </div>
    );
};

Progress.defaultProps = {
    now: 40,
    min: 0,
    max: 100,
    color: "primary",
    size: "md",
};

Progress.displayName = "Progress";

export default Progress;
