import { FC } from "react";
import clsx from "clsx";
import SubLink from "./sub-link";
import MenuTitle from "./menu-title";
import { IMegamenu } from "@ht/shared/types";

interface IProps {
    menu: IMegamenu[];
}

const MegaMenu: FC<IProps> = ({ menu }) => {
    const doubleColumnClass = "w-5/12";
    const singleColumnClass = "max-w-full grow basis-0";

    return (
        <div className="text-left bg-white absolute border border-geyser border-t-0 z-50 hidden top-[46px] left-0 p-[1.563rem] shadow-sm shadow-secondary/20 w-full group-hover:block">
            <div className="flex flex-wrap gap-[1.875rem]">
                {menu.map((nav) => {
                    const column = nav.submenu.length / 5;
                    const singleColumn = column <= 1;
                    const doubleColumn = column > 1;

                    return (
                        <div
                            key={nav.id}
                            className={clsx(
                                singleColumn && singleColumnClass,
                                doubleColumn && doubleColumnClass
                            )}
                        >
                            {nav?.title && <MenuTitle>{nav.title}</MenuTitle>}
                            {nav?.submenu && (
                                <ul
                                    className={clsx(
                                        doubleColumn && "flex flex-wrap"
                                    )}
                                >
                                    {nav.submenu.map((subnav) => (
                                        <li
                                            key={subnav.id}
                                            className={clsx(
                                                doubleColumn && "w-2/4"
                                            )}
                                        >
                                            <SubLink
                                                label={subnav.label}
                                                path={subnav.url}
                                                isMegaMenu
                                            />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MegaMenu;
