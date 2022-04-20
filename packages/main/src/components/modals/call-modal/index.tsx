import { FC } from "react";
import { Modal, ModalBody, Button } from "@ht/components";

interface IProps {
    show: boolean;
    onClose: () => void;
    name: string;
    image: { src: string };
}

const CallModal: FC<IProps> = ({ show, onClose, name, image }) => {
    return (
        <Modal show={show} onClose={onClose}>
            <button
                type="button"
                className="absolute z-50 right-0 bg-white text-heading w-12 h-12 text-lg top-0 md:translate-x-1/2 md:-translate-y-1/2 rounded-full"
                onClick={onClose}
            >
                <i className="icon ion-close"></i>
            </button>
            <ModalBody className="flex flex-col items-center justify-center py-6">
                {image?.src && (
                    <img
                        className="w-28 h-28 rounded-full"
                        src={image.src}
                        alt=""
                    />
                )}
                <h4 className="mt-5">{name} is in another call</h4>
                <p className="mt-2">Please, try again later</p>

                <Button
                    color="danger"
                    onClick={onClose}
                    className="!py-2 !px-4"
                >
                    Cancel
                </Button>
            </ModalBody>
        </Modal>
    );
};

export default CallModal;
