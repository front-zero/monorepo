import { FC } from "react";
import SubLink from "./sub-link";

interface Menu {
    id: string | number;
    label: string;
    url: string;
    submenu?: Menu[];
}

interface IProps {
    menu: Menu[];
}

const Submenu: FC<IProps> = ({ menu }) => {
    return (
        <ul className="text-left bg-white absolute border border-geyser border-t-0 z-50 hidden top-[46px] left-0 py-[0.625rem] shadow-sm shadow-secondary/20 md:w-[12.5rem] group-hover:block">
            {menu.map((nav) => {
                const submenu = nav.submenu;
                return (
                    <li key={nav.id} className="relative group-scope">
                        <SubLink label={nav.label} path={nav.url} />
                        {!!submenu && (
                            <i className="fa fa-angle-right absolute right-5 top-1/2 -translate-y-1/2" />
                        )}
                        {!!submenu && (
                            <ul className="absolute bg-white top-0 -right-[200px] w-[200px] border border-ghost py-2.5 shadow-sm shadow-secondary/20 hidden group-scope-hover:block">
                                {submenu.map((sub) => (
                                    <li key={sub.id}>
                                        <SubLink
                                            label={sub.label}
                                            path={sub.url}
                                        />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

Submenu.displayName = "Submenu";

export default Submenu;
