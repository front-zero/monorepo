import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./style.css";

interface IProps {
    bottom?: string;
    className?: string;
    initialView?: "top" | "bottom";
    isPositionChange?: boolean;
}

const ScrollBar: FC<IProps> = ({
    children,
    bottom,
    className,
    initialView,
    isPositionChange,
    ...rest
}) => {
    const [scrollEl, setScrollEl] = useState<HTMLElement>();

    useEffect(() => {
        if (initialView !== "bottom") return;
        if (scrollEl) {
            // Set the scroll position to the bottom
            scrollEl.scrollTop = scrollEl.scrollHeight;
        }
    }, [scrollEl, initialView, isPositionChange]);
    return (
        <div
            {...rest}
            className={clsx("scrollbar", className)}
            style={{ height: bottom ? `calc(100% - ${bottom})` : "100%" }}
        >
            <PerfectScrollbar containerRef={(ref) => setScrollEl(ref)}>
                {children}
            </PerfectScrollbar>
        </div>
    );
};

ScrollBar.defaultProps = {
    initialView: "top",
};

export default ScrollBar;
