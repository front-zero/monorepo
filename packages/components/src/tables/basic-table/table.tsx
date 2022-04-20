import { FC, Children, isValidElement, cloneElement, ReactNode } from "react";
import clsx from "clsx";

type TColor =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "teal"
    | "indigo"
    | "purple"
    | "pink"
    | "orange";

interface IProps {
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
    theadColor?: TColor;
    color?: TColor;
    className?: string;
}

const BasicTable: FC<IProps> = ({
    children,
    className,
    striped,
    bordered,
    hover,
    theadColor,
    color,
}) => {
    const baseTHClass =
        "uppercase bg-geyser text-heading tracking-wide text-xs font-bold p-3";
    const baseTDClass = "p-3 text-gray-650 text-left";
    const borderedClass =
        bordered && "border border-geyser border-t-0 border-l-0 first:border-l";
    const notBorderdClass = !bordered && "border-t border-t-geyser";
    const coloredTheadClass = [
        (theadColor || color) && "text-white border-white/50",
        (theadColor === "primary" || color === "primary") && "bg-primary",
        (theadColor === "secondary" || color === "secondary") && "bg-secondary",
        (theadColor === "success" || color === "success") && "bg-success",
        (theadColor === "warning" || color === "warning") && "bg-warning",
        (theadColor === "danger" || color === "danger") && "bg-danger",
        (theadColor === "info" || color === "info") && "bg-info",
        (theadColor === "teal" || color === "teal") && "bg-teal",
        (theadColor === "indigo" || color === "indigo") && "bg-indigo",
        (theadColor === "purple" || color === "purple") && "bg-purple",
        (theadColor === "pink" || color === "pink") && "bg-pink",
        (theadColor === "orange" || color === "orange") && "bg-orange",
    ];
    const coloredBodyClass = [
        color && "border-white",
        color === "primary" && "bg-primary-50",
        color === "secondary" && "bg-secondary-50",
        color === "success" && "bg-success-50",
        color === "warning" && "bg-warning-50",
        color === "danger" && "bg-danger-50",
        color === "info" && "bg-info-50",
        color === "teal" && "bg-teal-50",
        color === "indigo" && "bg-indigo-50",
        color === "purple" && "bg-purple-50",
        color === "pink" && "bg-pink-50",
        color === "orange" && "bg-orange-50",
    ];

    const iterateOverChildren = (
        reactChildren: ReactNode,
        parent: "thead" | "tbody"
    ): ReactNode => {
        return Children.map(reactChildren, (child) => {
            if (!isValidElement(child)) return child;

            const props: { [x: string]: unknown } = {
                ...child.props,
            };
            const childType = child.props.originalType || child.type;
            const name = childType.displayName;
            if (parent === "thead") {
                return cloneElement(child, {
                    ...props,
                    className: clsx(
                        (childType === "th" ||
                            childType === "td" ||
                            name === "th" ||
                            name === "td") && [
                            baseTHClass,
                            coloredTheadClass,
                            borderedClass,
                        ],
                        child.props.className as string
                    ),
                    children: iterateOverChildren(
                        child.props.children as ReactNode,
                        parent
                    ),
                });
            }
            if (parent === "tbody") {
                return cloneElement(child, {
                    ...props,
                    className: clsx(
                        (childType === "th" ||
                            childType === "td" ||
                            name === "th" ||
                            name === "td") && [
                            baseTDClass,
                            borderedClass,
                            notBorderdClass,
                            coloredBodyClass,
                        ],
                        (childType === "th" || name === "th") &&
                            "!text-heading font-medium",
                        (childType === "tr" || name === "tr") && [
                            striped && "odd:bg-gray-200",
                            hover && "hover:bg-black/[0.075]",
                        ],
                        child.props.className as string
                    ),
                    children: iterateOverChildren(
                        child.props.children as ReactNode,
                        parent
                    ),
                });
            }
        });
    };

    const renderChildren = Children.map(children, (child) => {
        if (!isValidElement(child)) return child;
        const props: { [x: string]: unknown } = {
            ...child.props,
        };

        const childType = child.props.originalType || child.type;

        if (childType === "thead" || childType === "tbody") {
            return cloneElement(child, {
                ...props,
                children: iterateOverChildren(
                    child.props.children as ReactNode,
                    childType as "thead" | "tbody"
                ),
            });
        }
        return cloneElement(child, {
            ...props,
            children: child.props.children,
        });
    });

    return (
        <div className="table-responsive">
            <table className={clsx("table w-full", className)}>
                {renderChildren}
            </table>
        </div>
    );
};

export default BasicTable;
