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
    Textarea,
} from "@ht/components";
import { hasKey } from "@ht/shared/methods";
import { useForm, SubmitHandler } from "react-hook-form";
import { useProfile } from "../../../context/profile-context";

interface IProps {
    show: boolean;
    onClose: () => void;
}

interface IFormValues {
    name: string;
    designation: string;
    company: string;
    location: string;
    bio: string;
}

const AboutEditModal: FC<IProps> = ({ show, onClose }) => {
    const { about, editAbout } = useProfile();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormValues>({
        defaultValues: about,
    });
    const submitHandler: SubmitHandler<IFormValues> = (data) => {
        if (editAbout) {
            editAbout(data);
            onClose();
        }
    };
    return (
        <Modal show={show} onClose={onClose}>
            <ModalHeader>
                <ModalTitle tag="h4">Edit About</ModalTitle>
                <ModalClose onClose={onClose}>x</ModalClose>
            </ModalHeader>
            <ModalBody>
                <div className="mb-4">
                    <Input
                        id="name"
                        placeholder="Name"
                        feedbackText={errors?.name?.message}
                        state={hasKey(errors, "name") ? "error" : "success"}
                        showState={!!hasKey(errors, "name")}
                        {...register("name", {
                            required: "name is required",
                        })}
                    />
                </div>
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
                            required: "designation is required",
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
                        id="location"
                        placeholder="Location"
                        feedbackText={errors?.location?.message}
                        state={hasKey(errors, "location") ? "error" : "success"}
                        showState={!!hasKey(errors, "location")}
                        {...register("location", {
                            required: "Location is required",
                        })}
                    />
                </div>
                <div className="mb-4">
                    <Textarea
                        id="bio"
                        placeholder="Bio"
                        feedbackText={errors?.bio?.message}
                        state={hasKey(errors, "bio") ? "error" : "success"}
                        showState={!!hasKey(errors, "bio")}
                        {...register("bio", {
                            required: "Bio is required",
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
