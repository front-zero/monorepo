import { FC } from "react";
import clsx from "clsx";

export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
}

const ModalFooter: FC<IProps> = ({ className, children }) => {
    return (
        <div
            className={clsx(
                className,
                "modal-footer flex flex-wrap items-center justify-end p-3 border-t border-t-ghost rounded-bl rounded-br"
            )}
        >
            {children}
        </div>
    );
};

export default ModalFooter;
