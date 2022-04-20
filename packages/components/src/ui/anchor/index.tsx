import { FC } from "react";
import { Link } from "react-router-dom";

interface IProps {
    path: string;
    className?: string | undefined;
    rel?: string | undefined;
    label?: string | undefined;
    target?: "_blank" | "_self" | "_parent" | "_top";
    onClick?: (e: React.MouseEvent) => void;
}

const Anchor: FC<IProps> = ({
    path,
    children,
    className,
    rel,
    label,
    target,
    onClick,
    ...rest
}) => {
    const internal = /^\/(?!\/)/.test(path);
    if (!internal) {
        const isHash = path.startsWith("#");
        if (isHash) {
            return (
                <a
                    aria-label={label}
                    className={className}
                    href={path}
                    onClick={onClick}
                    {...rest}
                >
                    {children}
                </a>
            );
        }
        return (
            <a
                aria-label={label}
                rel={rel}
                className={className}
                href={path}
                target={target}
                onClick={onClick}
                {...rest}
            >
                {children}
            </a>
        );
    }

    return (
        <Link
            aria-label={label}
            rel="preload"
            className={className}
            to={path}
            {...rest}
        >
            {children}
        </Link>
    );
};

Anchor.defaultProps = {
    target: "_blank",
    rel: "noopener noreferrer",
};

Anchor.displayName = "Anchor";

export default Anchor;
