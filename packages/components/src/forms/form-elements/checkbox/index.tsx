import { forwardRef } from "react";
import cn from "clsx";
import { IInputProps } from "../types";

interface IProps extends IInputProps {
    checked?: boolean;
    defaultChecked?: boolean;
    label: string;
    color?: "primary" | "success" | "indigo";
}

const Checkbox = forwardRef<HTMLInputElement, IProps>(
    (
        {
            className,
            disabled,
            id,
            name,
            label,
            checked,
            defaultChecked,
            onChange,
            onClick,
            onBlur,
            value,
            color,
            ...restProps
        },
        ref
    ) => {
        const pseudoClass =
            "before:absolute before:leading-4 before:w-4 before:h-4 before:top-px before:left-0";
        const beforeClass =
            "before:content[''] before:bg-white before:border before:border-solid before:border-gray-600";
        const disabledClass =
            disabled && "opacity-50 before:opacity-50 after:opacity-50";

        return (
            <div className="custom-checkbox">
                <label className={cn("relative block leading-4", className)}>
                    <input
                        type="checkbox"
                        disabled={disabled}
                        id={id}
                        name={name}
                        checked={checked}
                        defaultChecked={defaultChecked}
                        onChange={onChange}
                        onClick={onClick}
                        onBlur={onBlur}
                        value={value}
                        ref={ref}
                        className="opacity-0 mr-1.5 peer"
                        {...restProps}
                    />
                    <i
                        className={cn(
                            "fa fa-check",
                            "text-white !text-[9px] !leading-4 text-center font-normal absolute w-4 h-4 top-px left-0 z-10 !hidden peer-checked:!inline-block",
                            color === "primary" && "bg-primary",
                            color === "success" && "bg-success",
                            color === "indigo" && "bg-indigo"
                        )}
                    />
                    <span
                        className={cn(
                            "pl-1.5",
                            pseudoClass,
                            beforeClass,
                            disabledClass
                        )}
                    >
                        {label}
                    </span>
                </label>
            </div>
        );
    }
);

Checkbox.displayName = "Checkbox";

Checkbox.defaultProps = {
    color: "primary",
};

export default Checkbox;
