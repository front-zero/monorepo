import { FC } from "react";

const Nav: FC = ({ children }) => {
    return <nav className="flex-col border border-ghost">{children}</nav>;
};

export default Nav;
