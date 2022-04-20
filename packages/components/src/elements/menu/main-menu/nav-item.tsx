import { Children, FC, ReactChild, ReactText, FunctionComponent } from "react";
import clsx from "clsx";

type IChild = Exclude<ReactChild, ReactText>;

interface IProps {
    /**
     * Pass true if the item has children
     */
    hasChildren?: boolean;
    /**
     * Pass true if the item children is mega menu
     */
    isMegaMenu?: boolean;
}

const NavItem: FC<IProps> = ({ children, hasChildren, isMegaMenu }) => {
    const baseClass = "nav-item flex-1 text-center lg:flex-auto xl:flex-1";

    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "NavLink") {
                return (
                    <child.type {...child.props} hasChildren={hasChildren} />
                );
            }
            return <child.type {...child.props} />;
        }
        return null;
    });

    return (
        <li
            className={clsx(
                baseClass,
                !isMegaMenu && hasChildren && "lg:relative",
                isMegaMenu && "static",
                "group"
            )}
        >
            {RenderChild}
        </li>
    );
};

export default NavItem;
