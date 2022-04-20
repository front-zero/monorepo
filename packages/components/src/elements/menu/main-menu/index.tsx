import { FC } from "react";
import clsx from "clsx";
import NavItem from "./nav-item";
import NavLink from "./nav-link";
import SubMenu from "./sub-menu";
import MegaMenu from "./mega-menu";
import { IMenu } from "@ht/shared/types";

interface IProps {
    menu: IMenu[];
    className?: string;
}

const MainMenu: FC<IProps> = ({ menu, className }) => {
    return (
        <div
            className={clsx(
                "slim-navbar py-[0.938rem] bg-white border-b border-b-ghost hidden lg:block",
                className
            )}
        >
            <div className="container">
                <ul className="nav flex flex-wrap relative">
                    {menu.map((nav, i) => {
                        const { submenu, megamenu } = nav;
                        const hasChildren = !!submenu || !!megamenu;
                        return (
                            <NavItem
                                key={nav.id}
                                hasChildren={hasChildren}
                                isMegaMenu={!!megamenu}
                            >
                                <NavLink
                                    icon={nav.icon}
                                    label={nav.label}
                                    path={nav.url}
                                    className={
                                        i === menu.length - 1 ? "!border-r" : ""
                                    }
                                />
                                {submenu && <SubMenu menu={submenu} />}
                                {megamenu && <MegaMenu menu={megamenu} />}
                            </NavItem>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default MainMenu;
