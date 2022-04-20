import { FC } from "react";
import clsx from "clsx";

export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
}

const ModalBody: FC<IProps> = ({ className, children }) => {
    return (
        <div className={clsx(className, "modal-body relative flex-auto p-4")}>
            {children}
        </div>
    );
};

export default ModalBody;
