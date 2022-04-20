import { FC, useRef } from "react";
import { Portal } from "react-portal";
import clsx from "clsx";
import { CSSTransition } from "react-transition-group";

export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
}

export interface IModal extends IProps {
    /**
     * When `true` The modal will show itself.
     */
    show: boolean;
    /**
     * Modal Sizes
     */
    size?: "xl" | "lg" | "md" | "sm";
    /**
     * vertically center the Dialog in the window
     */
    centered?: boolean;
    /**
     * Callback function for close modal
     */
    onClose: () => void;
}

const Modal: FC<IModal> = ({
    className,
    show,
    size,
    centered,
    children,
    onClose,
}) => {
    const nodeRef = useRef(null);
    return (
        <Portal>
            <>
                <div
                    className={clsx(
                        "backdrop fixed top-0 left-0 w-screen h-screen bg-black transition-opacity z-10",
                        !show && "opacity-0 invisible",
                        show && "opacity-50 visible"
                    )}
                />
                <div
                    className={clsx(
                        className,
                        "fixed inset-0 overflow-hidden outline-0 transition-opacity z-20",
                        !show && "opacity-0 invisible",
                        show && "opacity-100 visible"
                    )}
                    role="button"
                    tabIndex={0}
                    onClick={onClose}
                    onKeyPress={(e) => e}
                >
                    <CSSTransition
                        in={show}
                        timeout={400}
                        unmountOnExit
                        classNames="modal"
                        nodeRef={nodeRef}
                    >
                        {() => (
                            <div
                                ref={nodeRef}
                                className={clsx(
                                    "modal-dialog relative w-auto m-2 pointer-events-none sm:my-5 sm:mx-auto",
                                    size === "sm" && "sm:max-w-[300px]",
                                    size === "md" && "sm:max-w-[500px]",
                                    size === "lg" &&
                                        "sm:max-w-[500px] lg:max-w-[800px]",
                                    size === "xl" &&
                                        "sm:max-w-[500px] lg:max-w-[800px]",
                                    centered &&
                                        "flex items-center min-h-[calc(100vh_-_1rem)] sm:min-h-[calc(100vh_-_3.5rem)]"
                                )}
                            >
                                <div
                                    className="modal-content relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded"
                                    onClick={(e) => e.stopPropagation()}
                                    onKeyPress={(e) => e.stopPropagation()}
                                    role="button"
                                    tabIndex={0}
                                >
                                    {children}
                                </div>
                            </div>
                        )}
                    </CSSTransition>
                </div>
            </>
        </Portal>
    );
};

Modal.defaultProps = {
    size: "md",
    centered: true,
};

export default Modal;
