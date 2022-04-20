import { forwardRef } from "react";
import clsx from "clsx";
import Feedback from "../feedback";
import { IInputProps } from "../types";

interface IProps extends IInputProps {
    label: string;
    color?: "gray" | "primary" | "inverse";
}

const FileBrowser = forwardRef<HTMLInputElement, IProps>(
    (
        {
            className,
            state,
            feedbackText,
            id,
            name,
            onChange,
            onClick,
            onBlur,
            value,
            label,
            showState,
            showErrorOnly,
            color,
            ...restProps
        },
        ref
    ) => {
        const labelClass =
            "absolute inset-0 z-10 h-full py-[0.54rem] px-3 leading-tight text-heading bg-white border border-solid border-ghost";
        const labelAfterClass =
            "after:absolute after:z-20 after:block after:py-3 after:px-3 after:leading-tight after:border-l after:border-l-solid after:content-['Browse']";
        const grayColorClass =
            color === "gray" &&
            "after:text-heading after:border-l-ghost after:bg-gray-300";
        const primaryColorClass =
            color === "primary" &&
            "after:text-white after:border-l-transparent after:bg-primary";
        const inverseColorClass =
            color === "inverse" &&
            "after:text-white after:border-l-transparent after:bg-heading";
        const defaultPositionClass =
            color === "gray" && "after:inset-0 after:left-auto";
        const positionClass =
            color !== "gray" && "after:inset-[-1px] after:left-auto";

        return (
            <>
                <div
                    className={clsx(
                        "relative h-[2.625rem] file-browser",
                        className
                    )}
                >
                    <input
                        type="file"
                        className="relative h-full w-full opacity-0 peer"
                        id={id}
                        name={name}
                        ref={ref}
                        onChange={onChange}
                        onClick={onClick}
                        onBlur={onBlur}
                        value={value}
                        multiple
                        {...restProps}
                    />
                    <label
                        className={clsx(
                            labelClass,
                            labelAfterClass,
                            grayColorClass,
                            primaryColorClass,
                            inverseColorClass,
                            defaultPositionClass,
                            positionClass,
                            "peer-focus:border-blue-100 peer-focus:shadow-primary/25 peer-focus:shadow-xs"
                        )}
                        htmlFor={id}
                    >
                        {label}
                    </label>
                </div>
                {feedbackText && showState && (
                    <Feedback state={state} showErrorOnly={showErrorOnly}>
                        {feedbackText}
                    </Feedback>
                )}
            </>
        );
    }
);

FileBrowser.displayName = "FileBrowser";

FileBrowser.defaultProps = {
    color: "gray",
    showErrorOnly: true,
};

export default FileBrowser;
