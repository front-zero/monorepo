import { FC } from "react";
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
} from "@ht/components";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const ShareModal: FC<IProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose}>
            <ModalHeader>
                <ModalTitle tag="h5">Share This Post</ModalTitle>
                <ModalClose onClose={onClose}>x</ModalClose>
            </ModalHeader>
            <ModalBody>
                <div className="social">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full border border-ghost inline-flex justify-center items-center mr-3"
                    >
                        <i className="fa fa-facebook" />
                        <span className="sr-only">Facebook</span>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full border border-ghost inline-flex justify-center items-center mr-3"
                    >
                        <i className="fa fa-twitter" />
                        <span className="sr-only">twitter</span>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full border border-ghost inline-flex justify-center items-center mr-3"
                    >
                        <i className="fa fa-linkedin" />
                        <span className="sr-only">linkedin</span>
                    </a>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default ShareModal;
