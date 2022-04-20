import { FC } from "react";
import clsx from "clsx";

interface IListGroupItem {
    active?: boolean;
    disabled?: boolean;
    flush?: boolean;
    horizontal?: boolean;
    className?: string;
}

const ListGroupItem: FC<IListGroupItem> = ({
    className,
    children,
    active,
    disabled,
    flush,
    horizontal,
    ...restProps
}) => {
    return (
        <li
            className={clsx(
                className,
                "list-group-item",
                "py-2.5 px-3.8",
                !horizontal && "border border-t-0 border-geyser first:border-t",
                !flush && !horizontal && "first:rounded-t last:rounded-b",
                !active && !disabled && "bg-transparent",
                active &&
                    "-mt-px border-t z-10 text-white bg-primary border-primary",
                disabled && "text-gray-850 pointer-events-none bg-white",
                flush && "border-0 border-b last:border-b-0",
                horizontal &&
                    "first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br border border-geyser border-l-0 first:border-l"
            )}
            {...restProps}
        >
            {children}
        </li>
    );
};

ListGroupItem.displayName = "ListGroupItem";

export default ListGroupItem;
