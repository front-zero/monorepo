import { MouseEvent } from "react";
import Offcanvas, {
    OffcanvasHeader,
    OffcanvasBody,
} from "../../../ui/offcanvas";
import Logo from "../../logo";
import CloseButton from "../../../ui/close-button";
import NavItem from "./nav-item";
import NavLink from "./nav-link";
import ExpandButton from "./expand-button";
import Submenu from "./sub-menu";
import Megamenu from "./mega-menu";
import { getSiblings } from "@ht/shared/methods";
import { IMenu } from "@ht/shared/types";

interface IProps {
    isOpen: boolean;
    onClick: () => void;
    menu: IMenu[];
}

const MobileMenu = ({ isOpen, onClick, menu }: IProps) => {
    const clickHandler = (e: MouseEvent, hasChildren: boolean) => {
        if (hasChildren) {
            let target = e.currentTarget as HTMLElement | HTMLAnchorElement;
            if (target.nodeName === "A") {
                const tr = target as HTMLAnchorElement;
                if (tr.hash) return;
                e.preventDefault();
                target = target.parentElement as HTMLElement;
            }
            const submenu = target.querySelector(".submenu");
            const siblings = getSiblings(target);
            submenu?.classList.toggle("open");
            siblings.forEach((sib) => {
                sib.childNodes.forEach((child) => {
                    const childHT = child as HTMLElement;
                    childHT?.classList?.remove("open");
                });
            });
        }
    };

    return (
        <Offcanvas isOpen={isOpen} onClose={onClick} className="lg:hidden">
            <OffcanvasHeader>
                <Logo />
                <CloseButton onClick={onClick} />
            </OffcanvasHeader>
            <OffcanvasBody>
                <ul className="mobile-menu navbar">
                    {menu.map((nav) => {
                        const { submenu, megamenu } = nav;
                        const hasChildren = !!submenu || !!megamenu;
                        return (
                            <NavItem
                                key={nav.id}
                                onClick={(e) => clickHandler(e, true)}
                            >
                                <NavLink path={nav.url}>{nav.label}</NavLink>
                                {hasChildren && (
                                    <ExpandButton
                                        onClick={(e) => clickHandler(e, true)}
                                    />
                                )}
                                {submenu && <Submenu menu={submenu} />}
                                {megamenu && <Megamenu menu={megamenu} />}
                            </NavItem>
                        );
                    })}
                </ul>
            </OffcanvasBody>
        </Offcanvas>
    );
};

export default MobileMenu;
