import { FC } from "react";
import clsx from "clsx";

export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
    /**
     * HTML heading tag, default is `h3`. Can be set to `h1`, `h2`, `h4`, `h5`, `h6`
     * @default h3
     */
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const ModalTitle: FC<IProps> = ({ className, children, tag }) => {
    const HTMLTag = tag || "h3";
    return (
        <HTMLTag className={clsx(className, "modal-title mb-0 leading-normal")}>
            {children}
        </HTMLTag>
    );
};

export default ModalTitle;
