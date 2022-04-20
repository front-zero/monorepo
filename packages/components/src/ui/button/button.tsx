import { FC } from "react";
import cn from "clsx";
import Anchor from "../anchor";

export interface ButtonProps {
    /**
     * Required.
     */
    children: React.ReactNode;
    /**
     * Optional. Default is `button`.
     */
    type?: "button" | "submit" | "reset";
    /**
     * Optional. Default is `contained`.
     */
    variant?: "contained" | "outlined" | "texted";
    /**
     * Optional. Default is `primary`.
     */
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "purple"
        | "facebook"
        | "twitter"
        | "royal";
    /**
     * Optional. Default is `md`.
     */
    size?: "sm" | "md" | "lg";
    /**
     * Optional. Default is `rounded`.
     */
    shape?: "rounded" | "square" | "ellipse";
    /**
     * Pass fullwidth to make button fullwidth.
     */
    fullwidth?: boolean;
    /**
     * Pass active to enable active state.
     */
    active?: boolean;
    /**
     * Pass disabled to enable disabled state.
     */
    disabled?: boolean;
    /**
     * Pass iconButton to get Icon Button style.
     */
    iconButton?: boolean;
    /**
     * Optional. onClick function
     */
    onClick?: () => void;
    /**
     * Optional. Extra Class Name
     */
    className?: string;
    /**
     * Pass `path` to make link button
     */
    path?: string;
    /**
     * Optional. Pass label if button does not contain any text
     */
    label?: string;
    /**
     * Optional. Pass false if you don't need hover and focus
     */
    hover?: boolean;
}

const Button: FC<ButtonProps> = ({
    children,
    type,
    variant,
    color,
    size,
    shape,
    fullwidth,
    active,
    disabled,
    iconButton,
    hover,
    className,
    path,
    ...restProps
}) => {
    const baseClass =
        variant !== "texted" &&
        "inline-flex items-center justify-center font-normal text-center whitespace-normal border border-solid leading-body transition-colors min-w-max";
    const disabledClass = "opacity-[0.65] cursor-default";
    const containedBase = color !== "light" && "border-transparent text-white";
    const outlinedBase = "active:text-white";

    // Primary Button
    const containedPrimaryClass = "bg-primary border-primary";
    const containedPrimaryHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-primary-100 hover:border-primary-200 focus:shadow-primary/50 focus:shadow-xs";
    const containedPrimaryActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-primary-200 border-primary-300 active:bg-primary-200 active:border-primary-300";
    const containedPrimaryBtn = color === "primary" && [
        containedPrimaryClass,
        containedPrimaryHoverClass,
        containedPrimaryActiveClass,
    ];

    const outlinedPrimaryClass = "bg-transparent border-primary text-primary";
    const outlinedPrimaryHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-primary hover:text-white focus:shadow-primary/50 focus:shadow-xs";
    const outlinedPrimaryActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-primary border-primary text-white active:bg-primary active:bg-primary";
    const outlinedPrimaryBtn = color === "primary" && [
        outlinedPrimaryClass,
        outlinedPrimaryHoverClass,
        outlinedPrimaryActiveClass,
    ];

    const textedPrimaryClass = color === "primary" && "text-primary";

    // Secondary Button
    const containedSecondaryClass = "bg-secondary border-secondary";
    const containedSecondaryHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-secondary-100 hover:border-secondary-200 focus:shadow-secondary/50 focus:shadow-xs";
    const containedSecondaryActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-secondary-200 border-secondary-300 active:bg-secondary-200 active:border-secondary-300";
    const containedSecondaryBtn = color === "secondary" && [
        containedSecondaryClass,
        containedSecondaryHoverClass,
        containedSecondaryActiveClass,
    ];

    const outlinedSecondaryClass =
        "bg-transparent border-secondary text-secondary";
    const outlinedSecondaryHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-secondary hover:text-white focus:shadow-secondary/50 focus:shadow-xs";
    const outlinedSecondaryActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-secondary border-secondary text-white active:bg-secondary active:bg-secondary";
    const outlinedSecondaryBtn = color === "secondary" && [
        outlinedSecondaryClass,
        outlinedSecondaryHoverClass,
        outlinedSecondaryActiveClass,
    ];
    const textedSecondaryClass = color === "secondary" && "text-secondary";

    // Success Button
    const containedSuccessClass = "bg-success border-success";
    const containedSuccessHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-success-100 hover:border-success-200 focus:shadow-success/50 focus:shadow-xs";
    const containedSuccessActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-success-200 border-success-300 active:bg-success-200 active:border-success-300";
    const containedSuccessBtn = color === "success" && [
        containedSuccessClass,
        containedSuccessHoverClass,
        containedSuccessActiveClass,
    ];

    const outlinedSuccessClass = "bg-transparent border-success text-success";
    const outlinedSuccessHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-success hover:text-white focus:shadow-success/50 focus:shadow-xs";
    const outlinedSuccessActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-success border-success text-white active:bg-success active:bg-success";
    const outlinedSuccessBtn = color === "success" && [
        outlinedSuccessClass,
        outlinedSuccessHoverClass,
        outlinedSuccessActiveClass,
    ];
    const textedSuccessClass = color === "success" && "text-success";

    // Danger Button

    const containedDangerClass = "bg-danger border-danger";
    const containedDangerHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-danger-100 hover:border-danger-200 focus:shadow-danger/50 focus:shadow-xs";
    const containedDangerActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-danger-200 border-danger-300 active:bg-danger-200 active:border-danger-300";
    const containedDangerBtn = color === "danger" && [
        containedDangerClass,
        containedDangerHoverClass,
        containedDangerActiveClass,
    ];

    const outlinedDangerClass = "bg-transparent border-danger text-danger";
    const outlinedDangerHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-danger hover:text-white focus:shadow-danger/50 focus:shadow-xs";
    const outlinedDangerActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-danger border-danger text-white active:bg-danger active:bg-danger";
    const outlinedDangerBtn = color === "danger" && [
        outlinedDangerClass,
        outlinedDangerHoverClass,
        outlinedDangerActiveClass,
    ];
    const textedDangerClass = color === "danger" && "text-danger";

    // Warning Button

    const containedWarningClass = "bg-warning border-warning";
    const containedWarningHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-warning-100 hover:border-warning-200 focus:shadow-warning/50 focus:shadow-xs";
    const containedWarningActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-warning-200 border-warning-300 active:bg-warning-200 active:border-warning-300";
    const containedWarningBtn = color === "warning" && [
        containedWarningClass,
        containedWarningHoverClass,
        containedWarningActiveClass,
    ];

    const outlinedWarningClass = "bg-transparent border-warning text-warning";
    const outlinedWarningHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-warning hover:text-white focus:shadow-warning/50 focus:shadow-xs";
    const outlinedWarningActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-warning border-warning text-white active:bg-warning active:bg-warning";
    const outlinedWarningBtn = color === "warning" && [
        outlinedWarningClass,
        outlinedWarningHoverClass,
        outlinedWarningActiveClass,
    ];
    const textedWarningClass = color === "warning" && "text-warning";

    // Info Button

    const containedInfoClass = "bg-info border-info";
    const containedInfoHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-info-100 hover:border-info-200 focus:shadow-info/50 focus:shadow-xs";
    const containedInfoActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-info-200 border-info-300 active:bg-info-200 active:border-info-300";
    const containedInfoBtn = color === "info" && [
        containedInfoClass,
        containedInfoHoverClass,
        containedInfoActiveClass,
    ];

    const outlinedInfoClass = "bg-transparent border-info text-info";
    const outlinedInfoHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-info hover:text-white focus:shadow-info/50 focus:shadow-xs";
    const outlinedInfoActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-info border-info text-white active:bg-info active:bg-info";
    const outlinedInfoBtn = color === "info" && [
        outlinedInfoClass,
        outlinedInfoHoverClass,
        outlinedInfoActiveClass,
    ];
    const textedInfoClass = color === "info" && "text-info";

    // Light Button

    const containedLightClass = "bg-gray-200 border-ghost text-body";
    const containedLightHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-white hover:border-gray-550 hover:text-heading focus:shadow-info/50 focus:shadow-xs";
    const containedLightActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-gray-800 border-gray-700 active:bg-gray-800 active:bg-gray-800";
    const containedLightBtn = color === "light" && [
        containedLightClass,
        containedLightHoverClass,
        containedLightActiveClass,
    ];

    const outlinedLightClass = "bg-transparent border-gray-600 text-body";
    const outlinedLightHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-gray-600 hover:text-white focus:shadow-gray-600/50 focus:shadow-xs";
    const outlinedLightActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-gray-800 border-gray-700 text-white active:bg-gray-800 active:bg-gray-800";
    const outlinedLightBtn = color === "light" && [
        outlinedLightClass,
        outlinedLightHoverClass,
        outlinedLightActiveClass,
    ];
    const textedLightClass =
        color === "light" &&
        "text-heading hover:text-primary focus:text-primary";

    // Purple Button

    const containedPurpleClass = "bg-purple border-purple";
    const containedPurpleHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-purple-100 hover:border-purple-200 focus:shadow-purple/50 focus:shadow-xs";
    const containedPurpleActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-purple-200 border-purple-300 active:bg-purple-200 active:border-purple-300";
    const containedPurpleBtn = color === "purple" && [
        containedPurpleClass,
        containedPurpleHoverClass,
        containedPurpleActiveClass,
    ];

    const outlinedPurpleClass = "bg-transparent border-purple text-purple";
    const outlinedPurpleHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-purple hover:text-white focus:shadow-purple/50 focus:shadow-xs";
    const outlinedPurpleActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-purple border-purple text-white active:bg-purple active:bg-purple";
    const outlinedPurpleBtn = color === "purple" && [
        outlinedPurpleClass,
        outlinedPurpleHoverClass,
        outlinedPurpleActiveClass,
    ];
    const textedPurpleClass = color === "purple" && "text-purple";

    // Facebook Button

    const containedFacebookClass = "bg-facebook border-facebook";
    const containedFacebookHoverClass =
        !disabled &&
        !active &&
        hover &&
        "focus:shadow-facebook/50 focus:shadow-xs";
    const containedFacebookActiveClass =
        !disabled &&
        active &&
        hover &&
        "focus:shadow-facebook/50 focus:shadow-xs";
    const containedFacebookBtn = color === "facebook" && [
        containedFacebookClass,
        containedFacebookHoverClass,
        containedFacebookActiveClass,
    ];

    const outlinedFacebookClass =
        "bg-transparent border-facebook text-facebook";
    const outlinedFacebookHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-facebook hover:text-white focus:shadow-facebook/50 focus:shadow-xs";
    const outlinedFacebookActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-facebook border-facebook text-white active:bg-facebook active:bg-facebook";
    const outlinedFacebookBtn = color === "facebook" && [
        outlinedFacebookClass,
        outlinedFacebookHoverClass,
        outlinedFacebookActiveClass,
    ];
    const textedFacebookClass = color === "facebook" && "text-facebook";

    // Twitter Button

    const containedTwitterClass = "bg-twitter border-twitter";
    const containedTwitterHoverClass =
        !disabled &&
        !active &&
        hover &&
        "focus:shadow-twitter/50 focus:shadow-xs";
    const containedTwitterActiveClass =
        !disabled &&
        active &&
        hover &&
        "focus:shadow-twitter/50 focus:shadow-xs";
    const containedTwitterBtn = color === "twitter" && [
        containedTwitterClass,
        containedTwitterHoverClass,
        containedTwitterActiveClass,
    ];

    const outlinedTwitterClass = "bg-transparent border-twitter text-twitter";
    const outlinedTwitterHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-twitter hover:text-white focus:shadow-twitter/50 focus:shadow-xs";
    const outlinedTwitterActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-twitter border-twitter text-white active:bg-twitter active:bg-twitter";
    const outlinedTwitterBtn = color === "twitter" && [
        outlinedTwitterClass,
        outlinedTwitterHoverClass,
        outlinedTwitterActiveClass,
    ];
    const textedTwitterClass = color === "twitter" && "text-twitter";

    // Royal Button

    const containedRoyalClass = "bg-royal border-royal";
    const containedRoyalHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-royal-100 hover:border-royal-250 focus:shadow-royal/50 focus:shadow-xs";
    const containedRoyalActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-royal-200 border-royal-300 active:bg-royal-200 active:border-royal-300";
    const containedRoyalBtn = color === "royal" && [
        containedRoyalClass,
        containedRoyalHoverClass,
        containedRoyalActiveClass,
    ];

    const outlinedRoyalClass = "bg-transparent border-royal text-royal";
    const outlinedRoyalHoverClass =
        !disabled &&
        !active &&
        hover &&
        "hover:bg-royal hover:text-white focus:shadow-royal/50 focus:shadow-xs";
    const outlinedRoyalActiveClass =
        !disabled &&
        active &&
        hover &&
        "bg-royal border-royal text-white active:bg-royal active:bg-royal";
    const outlinedRoyalBtn = color === "royal" && [
        outlinedRoyalClass,
        outlinedRoyalHoverClass,
        outlinedRoyalActiveClass,
    ];

    const textedRoyalClass = color === "royal" && "text-royal";

    // Buton Sizes
    const smBtn = size === "sm" && "text-sm px-2 py-1";
    const mdBtn = size === "md" && "text-base px-3 py-[0.594rem]";
    const lgBtn = size === "lg" && "text-md px-4 py-2";

    // Texted Button Sizes
    const smTextedBtn = size === "sm" && "text-sm";
    const mdTextedBtn = size === "md" && "text-base";
    const lgTextedBtn = size === "lg" && "text-md";

    // Icon Button Sizes
    const smIconBtn = size === "sm" && "w-[30px] h-[30px] text-sm";
    const mdIconBtn = size === "md" && "w-[35px] h-[35px] text-base";
    const lgIconBtn = size === "lg" && "w-10 h-10 text-base";

    // Button Shapes
    const roundedBtn = shape === "rounded" && "rounded-sm";
    const ellipseBtn = shape === "ellipse" && "rounded-full";
    const fullBtn = fullwidth && "flex w-full";

    const allClasses = [
        baseClass,
        variant === "contained" && containedBase,
        variant === "outlined" && outlinedBase,
        variant === "contained" &&
            (containedPrimaryBtn ||
                containedSecondaryBtn ||
                containedSuccessBtn ||
                containedDangerBtn ||
                containedWarningBtn ||
                containedInfoBtn ||
                containedLightBtn ||
                containedPurpleBtn ||
                containedRoyalBtn ||
                containedFacebookBtn ||
                containedTwitterBtn),
        variant === "outlined" &&
            (outlinedPrimaryBtn ||
                outlinedSecondaryBtn ||
                outlinedSuccessBtn ||
                outlinedDangerBtn ||
                outlinedWarningBtn ||
                outlinedInfoBtn ||
                outlinedLightBtn ||
                outlinedPurpleBtn ||
                outlinedRoyalBtn ||
                outlinedFacebookBtn ||
                outlinedTwitterBtn),
        variant === "texted" &&
            (textedPrimaryClass ||
                textedSecondaryClass ||
                textedSuccessClass ||
                textedDangerClass ||
                textedWarningClass ||
                textedInfoClass ||
                textedLightClass ||
                textedPurpleClass ||
                textedRoyalClass ||
                textedFacebookClass ||
                textedTwitterClass),
        !iconButton &&
            (variant === "contained" || variant === "outlined") &&
            (smBtn || mdBtn || lgBtn),
        variant === "texted" && (smTextedBtn || mdTextedBtn || lgTextedBtn),
        iconButton && (smIconBtn || mdIconBtn || lgIconBtn),
        roundedBtn,
        ellipseBtn,
        fullBtn,
        disabled && disabledClass,
        className,
    ];

    if (path) {
        return (
            <Anchor path={path} className={cn(allClasses)} {...restProps}>
                {children}
            </Anchor>
        );
    } else {
        return (
            <button type={type} className={cn(allClasses)} {...restProps}>
                {children}
            </button>
        );
    }
};

Button.defaultProps = {
    type: "button",
    variant: "contained",
    color: "primary",
    size: "md",
    shape: "square",
    fullwidth: false,
    active: false,
    disabled: false,
    iconButton: false,
    hover: true,
};

Button.displayName = "Button";

export default Button;
