import { FC } from "react";
import clsx from "clsx";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";

interface IProps {
    className?: string;
}

interface ITab extends IProps {
    justified?: boolean;
    vertical?: boolean;
    variation?: "line";
}

export const TabWrap: FC<ITab> = ({
    className,
    children,
    justified,
    vertical,
    variation,
}) => {
    return (
        <Tabs
            className={clsx(
                className,
                "react-tabs",
                justified && "react-tabs--justified",
                vertical && "react-tabs--vertical",
                variation && `react-tabs--variation-${variation}`
            )}
        >
            {children}
        </Tabs>
    );
};

export const TabContent: FC<IProps> = ({ className, children }) => {
    return (
        <div className={clsx(className, "react-tabs__content")}>{children}</div>
    );
};

export { Tab, TabPanel, TabList };
