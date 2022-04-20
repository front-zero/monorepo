import { FC } from "react";
import clsx from "clsx";

export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
    /**
     * Custom Style
     */
    style?: React.CSSProperties;
}

const ModalHeader: FC<IProps> = ({ className, children, style }) => {
    return (
        <div
            className={clsx(
                className,
                "modal-header flex items-center justify-between p-4 border-b border-b-ghost rounded-tl rounded-tr"
            )}
            style={style}
        >
            {children}
        </div>
    );
};

export default ModalHeader;
