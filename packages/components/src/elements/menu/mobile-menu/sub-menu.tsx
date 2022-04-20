import { FC } from "react";
import NavItem from "./nav-item";
import NavLink from "./nav-link";
import { IMenu } from "@ht/shared/types";

interface IProps {
    className?: string;
    menu: IMenu[];
}

const Submenu: FC<IProps> = ({ menu }) => {
    return (
        <ul className="submenu mt-2.5 pl-2.5">
            {menu.map((nav) => (
                <NavItem key={nav.id} isInSubmenu>
                    {!nav?.submenu && (
                        <NavLink path={nav.url} isInSubmenu>
                            {nav.label}
                        </NavLink>
                    )}
                    {nav?.submenu && (
                        <>
                            <h3 className="text-base opacity-70">
                                {nav.label}
                            </h3>
                            <ul className="">
                                {nav?.submenu?.map((sub) => (
                                    <li className="mb-1 last:mb-0" key={sub.id}>
                                        <NavLink path={sub.url} isInSubmenu>
                                            {sub.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </NavItem>
            ))}
        </ul>
    );
};

export default Submenu;
