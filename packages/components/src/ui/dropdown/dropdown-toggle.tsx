import { FC } from "react";
import clsx from "clsx";
import Button, { ButtonProps } from "../button/button";

interface IToggleProps extends ButtonProps {
    direction?: "up" | "down" | "left" | "right";
    showIcon?: boolean;
    show?: boolean;
    customStyle?: "only-icon";
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light";
    iconClass?: string;
}

const DropdownToggle: FC<IToggleProps> = ({
    children,
    className,
    direction,
    showIcon,
    show,
    customStyle,
    color,
    iconClass,
    ...restProps
}) => {
    const primaryOnlyIconHoverClass =
        customStyle === "only-icon" &&
        !show &&
        "hover:bg-gray-150 hover:text-primary focus:bg-gray-150 focus:text-primary";
    const primaryOnlyIconActiveClass =
        customStyle === "only-icon" && show && "bg-primary !text-white";
    return (
        <Button
            className={clsx(
                "dropdown-toggle",
                className,
                color === "primary" && [
                    primaryOnlyIconHoverClass,
                    primaryOnlyIconActiveClass,
                ]
            )}
            color={color}
            aria-expanded={show}
            {...restProps}
        >
            {showIcon && direction === "left" && (
                <i
                    className={clsx(
                        `fa fa-angle-left mt-0.5 mr-1.5`,
                        iconClass
                    )}
                />
            )}
            {children}
            {showIcon && direction && direction !== "left" && (
                <i
                    className={clsx(
                        `fa fa-angle-${direction} mt-0.5 ml-1.5`,
                        iconClass
                    )}
                />
            )}
        </Button>
    );
};

DropdownToggle.defaultProps = {
    label: "DropdownToggle",
    color: "primary",
};
DropdownToggle.displayName = "DropdownToggle";

export default DropdownToggle;
