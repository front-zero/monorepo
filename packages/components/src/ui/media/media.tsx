import { ElementType, ComponentProps } from "react";
import clsx from "clsx";

interface IProps<E extends ElementType = ElementType> {
    className?: string;
    as?: E;
}

type MediaProps<E extends ElementType> = IProps<E> &
    Omit<ComponentProps<E>, keyof IProps>;

const defaultElement = "div";

const Media = <E extends React.ElementType = typeof defaultElement>({
    className,
    children,
    as,
}: MediaProps<E>) => {
    const Tag = as || defaultElement;
    return (
        <Tag
            className={clsx(
                Tag === "div" ? "media" : "media-list",
                "flex items-start",
                className
            )}
        >
            {children}
        </Tag>
    );
};

export default Media;
