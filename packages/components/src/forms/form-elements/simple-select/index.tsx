import { forwardRef, ReactNode } from "react";
import clsx from "clsx";
import Feedback from "../feedback";
import { IInputProps } from "../types";

interface IProps extends IInputProps {
    children: Element | Element[] | ReactNode | ReactNode[];
}

const Select = forwardRef<HTMLSelectElement, IProps>(
    (
        {
            className,
            disabled,
            state,
            feedbackText,
            id,
            name,
            value,
            onChange,
            onBlur,
            onClick,
            readonly,
            children,
            showState,
            showErrorOnly,
            customStyle,
            ...restProps
        },
        ref
    ) => {
        const defaultClass =
            "block w-full py-[0.54rem] px-3 text-base text-body leading-relaxed bg-white border border-solid border-ghost placeholder-body";
        const focusClass =
            customStyle !== "nofocus" &&
            !readonly &&
            "focus:shadow-none focus:outline-0 focus:text-body focus:bg-white";
        const readOnlyAndDisabledClass =
            (readonly || disabled) && "bg-gray-300 opacity-100";
        const readOnlyFocusClass =
            customStyle !== "nofocus" &&
            readonly &&
            "focus:shadow-none focus:outline-0  focus:text-body";
        const successClass =
            !showErrorOnly && state === "success" && "!border-success";
        const warningClass =
            !showErrorOnly && state === "warning" && "!border-warning";
        const errorClass = state === "error" && "!border-danger";
        const focusBorderClass =
            customStyle !== "nofocus" && !state && "focus:border-blue-100";
        const noFocusClass = customStyle === "nofocus" && "focus:outline-0";
        return (
            <>
                <select
                    className={clsx(
                        "custom-select",
                        defaultClass,
                        focusClass,
                        readOnlyAndDisabledClass,
                        readOnlyFocusClass,
                        successClass,
                        warningClass,
                        errorClass,
                        focusBorderClass,
                        noFocusClass,
                        className
                    )}
                    ref={ref}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onClick={onClick}
                    onBlur={onBlur}
                    disabled={disabled}
                    {...restProps}
                >
                    {children}
                </select>
                {feedbackText && showState && (
                    <Feedback state={state} showErrorOnly={showErrorOnly}>
                        {feedbackText}
                    </Feedback>
                )}
            </>
        );
    }
);

Select.displayName = "Select";

Select.defaultProps = {
    showErrorOnly: true,
};

export default Select;
