import { forwardRef } from "react";
import cn from "clsx";
import Feedback from "../feedback";
import { IInputProps } from "../types";

interface IProps extends IInputProps {
    rows?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, IProps>(
    (
        {
            className,
            disabled,
            state,
            feedbackText,
            id,
            name,
            onChange,
            onClick,
            onBlur,
            value,
            readonly,
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
                <textarea
                    disabled={disabled}
                    ref={ref}
                    className={cn(
                        "form-control",
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
                    id={id}
                    name={name}
                    onChange={onChange}
                    onClick={onClick}
                    onBlur={onBlur}
                    value={value}
                    readOnly={readonly}
                    {...restProps}
                />
                {feedbackText && showState && (
                    <Feedback state={state} showErrorOnly={showErrorOnly}>
                        {feedbackText}
                    </Feedback>
                )}
            </>
        );
    }
);

Textarea.displayName = "Textarea ";

Textarea.defaultProps = {
    rows: 3,
    showState: true,
    showErrorOnly: true,
};

export default Textarea;
