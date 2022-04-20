import { FC } from "react";
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter,
    Button,
    Textarea,
} from "@ht/components";
import { hasKey } from "@ht/shared/methods";
import { useForm, SubmitHandler } from "react-hook-form";

interface IProps {
    show: boolean;
    onClose: () => void;
}

interface IFormValues {
    activity: string;
}

const AboutEditModal: FC<IProps> = ({ show, onClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>();
    const submitHandler: SubmitHandler<IFormValues> = (data) => {
        console.log(data);
        onClose();
    };
    return (
        <Modal show={show} onClose={onClose}>
            <ModalHeader>
                <ModalTitle tag="h4">Update Activity</ModalTitle>
                <ModalClose onClose={onClose}>x</ModalClose>
            </ModalHeader>
            <ModalBody>
                <div className="mb-4">
                    <Textarea
                        id="activity"
                        placeholder="Update Activity"
                        feedbackText={errors?.activity?.message}
                        state={hasKey(errors, "activity") ? "error" : "success"}
                        showState={!!hasKey(errors, "activity")}
                        {...register("activity", {
                            required: "Activity is required",
                        })}
                    />
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button
                    color="primary"
                    className="ml-3"
                    onClick={handleSubmit(submitHandler)}
                >
                    Save changes
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default AboutEditModal;
