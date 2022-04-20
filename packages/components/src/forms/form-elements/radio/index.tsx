import { forwardRef } from "react";
import cn from "clsx";
import { IInputProps } from "../types";
import Feedback from "../feedback";

interface IProps extends IInputProps {
    checked?: boolean;
    defaultChecked?: boolean;
    label: string;
    color?: "primary" | "success" | "indigo";
}

const Radio = forwardRef<HTMLInputElement, IProps>(
    (
        {
            className,
            disabled,
            id,
            name,
            label,
            state,
            checked,
            defaultChecked,
            onChange,
            onClick,
            onBlur,
            value,
            color,
            showState,
            showErrorOnly,
            feedbackText,
            ...restProps
        },
        ref
    ) => {
        const pseudoClass =
            "before:absolute before:leading-4 after:absolute after:leading-4";
        const beforeClass =
            "before:content[''] before:bg-white before:border before:border-solid before:border-gray-600 before:w-4 before:h-4 before:top-0.5 before:left-0 before:rounded-full peer-checked:before:border-transparent";
        const afterClass =
            "after:content-[''] after:bg-white after:w-1.5 after:h-1.5 after:rounded-full after:top-[7px] after:left-[5px] after:hidden peer-checked:after:block";
        const disabledClass =
            disabled && "opacity-50 before:opacity-50 after:opacity-50";
        return (
            <div className="custom-radio">
                <label
                    className={cn("relative block leading-4", color, className)}
                >
                    <input
                        type="radio"
                        disabled={disabled}
                        id={id}
                        name={name}
                        checked={checked}
                        onChange={onChange}
                        onClick={onClick}
                        onBlur={onBlur}
                        value={value}
                        ref={ref}
                        defaultChecked={defaultChecked}
                        className="opacity-0 mr-1.5 peer"
                        {...restProps}
                    />
                    <span
                        className={cn(
                            "pl-1.5",
                            pseudoClass,
                            beforeClass,
                            afterClass,
                            disabledClass,
                            color === "primary" &&
                                "peer-checked:before:bg-primary",
                            color === "success" &&
                                "peer-checked:before:bg-success",
                            color === "indigo" &&
                                "peer-checked:before:bg-indigo"
                        )}
                    >
                        {label}
                    </span>
                </label>
                {feedbackText && showState && (
                    <Feedback state={state} showErrorOnly={showErrorOnly}>
                        {feedbackText}
                    </Feedback>
                )}
            </div>
        );
    }
);

Radio.displayName = "Radio";

Radio.defaultProps = {
    color: "primary",
    showState: true,
    showErrorOnly: true,
};

export default Radio;
