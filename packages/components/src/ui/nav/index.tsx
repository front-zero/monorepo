import { FC, Children, FunctionComponent, ReactChild, ReactText } from "react";
import clsx from "clsx";

interface IProps {
    className?: string;
    layout?: 1 | 2;
}

type IChild = Exclude<ReactChild, ReactText>;

const Nav: FC<IProps> = ({ children, className, layout }) => {
    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "NavLink") {
                return <child.type {...child.props} layout={layout} />;
            }
        }
        return null;
    });
    return (
        <nav className={clsx("nav flex flex-wrap", className)}>
            {RenderChild}
        </nav>
    );
};

export { default as NavLink } from "./nav-link";

export default Nav;
