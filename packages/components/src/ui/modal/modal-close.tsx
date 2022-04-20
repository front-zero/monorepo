import { FC } from "react";
import clsx from "clsx";

export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
}

interface IClose extends IProps {
    onClose?: () => void;
}

const ModalClose: FC<IClose> = ({ className, children, onClose }) => {
    return (
        <button
            type="button"
            className={clsx(
                className,
                "close font-light text-3xl leading-none bg-transparent border-0 appearance-none text-heading cursor-pointer"
            )}
            onClick={onClose}
            data-dismiss="modal"
            aria-label="Close"
        >
            <span aria-hidden="true">{children}</span>
        </button>
    );
};

ModalClose.displayName = "ModalClose";

export default ModalClose;
