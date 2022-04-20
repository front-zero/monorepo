import { Children, FC, ReactChild, ReactText, FunctionComponent } from "react";
import clsx from "clsx";

interface IListGroup {
    flush?: boolean;
    horizontal?: boolean;
    className?: string;
    as?: React.ElementType;
}

type IChild = Exclude<ReactChild, ReactText>;

const ListGroup: FC<IListGroup> = ({
    className,
    children,
    flush,
    horizontal,
    as,
    ...restProps
}) => {
    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "ListGroupItem") {
                return (
                    <child.type
                        {...child.props}
                        flush={flush}
                        horizontal={horizontal}
                    />
                );
            }
        }
        return child;
    });
    const Tag = as || "ul";
    return (
        <Tag
            className={clsx(
                className,
                "list-group flex",
                !horizontal ? "flex-col" : "flex-row"
            )}
            {...restProps}
        >
            {RenderChild}
        </Tag>
    );
};

export default ListGroup;
