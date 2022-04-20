import { FC } from "react";
import clsx from "clsx";
import Header from "./header";
import Footer from "./footer";

interface IProps {
    hideFooter?: boolean;
    containerClass?: string;
}

const Layout: FC<IProps> = ({ children, hideFooter, containerClass }) => {
    return (
        <>
            <Header />
            <main className="main-content">
                <div className={clsx("container relative", containerClass)}>
                    {children}
                </div>
            </main>
            {!hideFooter && <Footer />}
        </>
    );
};

export default Layout;
