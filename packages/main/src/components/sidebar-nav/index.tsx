import { FC } from "react";
import Nav from "./nav";
import NavLink from "./nav-link";

interface IProps {
    type: string;
    items: Array<{
        title: string;
        count: number;
        slug: string;
    }>;
}

const SidebarNav: FC<IProps> = ({ items, type }) => {
    return (
        <Nav>
            {items.map((item) => (
                <NavLink key={item.title} path={item.slug} type={type}>
                    <span>{item.title}</span>
                    <span>{item.count}</span>
                </NavLink>
            ))}
        </Nav>
    );
};

export default SidebarNav;
