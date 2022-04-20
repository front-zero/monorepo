import { FC } from "react";
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from "@ht/components";
import { hasKey } from "@ht/shared/methods";
import { useForm, SubmitHandler } from "react-hook-form";
import { useProfile } from "../../../context/profile-context";

interface IProps {
    show: boolean;
    onClose: () => void;
}

interface IFormValues {
    designation: string;
    company: string;
    time: string;
}

const ExperianceAddModal: FC<IProps> = ({ show, onClose }) => {
    const { addExperience } = useProfile();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>();
    const submitHandler: SubmitHandler<IFormValues> = (data) => {
        if (!addExperience) return;
        addExperience({ id: new Date().getTime(), ...data });
        onClose();
    };
    return (
        <Modal show={show} onClose={onClose}>
            <ModalHeader>
                <ModalTitle tag="h4">Add new experience</ModalTitle>
                <ModalClose onClose={onClose}>x</ModalClose>
            </ModalHeader>
            <ModalBody>
                <div className="mb-4">
                    <Input
                        id="designation"
                        placeholder="Designation"
                        feedbackText={errors?.designation?.message}
                        state={
                            hasKey(errors, "designation") ? "error" : "success"
                        }
                        showState={!!hasKey(errors, "designation")}
                        {...register("designation", {
                            required: "Designation is required",
                        })}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        id="company"
                        placeholder="Company"
                        feedbackText={errors?.company?.message}
                        state={hasKey(errors, "company") ? "error" : "success"}
                        showState={!!hasKey(errors, "company")}
                        {...register("company", {
                            required: "Company is required",
                        })}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        id="time"
                        placeholder="Time Period"
                        feedbackText={errors?.time?.message}
                        state={hasKey(errors, "time") ? "error" : "success"}
                        showState={!!hasKey(errors, "time")}
                        {...register("time", {
                            required: "Time Period is required",
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

export default ExperianceAddModal;
