/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { FC, useState, useEffect, ChangeEvent } from "react";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalClose,
    Button,
    Input,
    Textarea,
    SimpleSelect,
} from "@ht/components";
import DatePicker from "../../../date-picker";
import { useEvent } from "../../../../context/event-context";
import Label from "../label";

interface IProps {
    show: boolean;
    onClose: () => void;
    currentDate: {
        start: Date;
        end: Date;
    };
    categories: string[];
}

const CreateEvent: FC<IProps> = ({
    show,
    onClose,
    currentDate,
    categories,
}) => {
    const { createEvent } = useEvent();
    const [values, setValues] = useState({
        createAddTitle: "",
        createStartDate: "",
        createStartTime: "",
        createEndDate: "",
        createEndTime: "",
        createDescription: "",
        createCategory: "",
    });
    const [showState, setShowState] = useState(false);
    const [errors, setErrors] = useState({
        createAddTitle: true,
        createStartDate: false,
        createStartTime: false,
        createEndDate: false,
        createEndTime: false,
        createDescription: false,
        createCategory: true,
    });

    useEffect(() => {
        setValues((prev) => {
            return {
                ...prev,
                createStartDate: dayjs(currentDate.start.toString()).format(
                    "YYYY-MM-DD"
                ),
                createEndDate: dayjs(currentDate.end.toString()).format(
                    "YYYY-MM-DD"
                ),
            };
        });
    }, [currentDate]);

    const changeHandler = (
        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setValues((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
        setErrors((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value === "",
            };
        });
    };

    const getDate = (name: string, date: string) => {
        setValues((prev) => {
            return {
                ...prev,
                [name]: date,
            };
        });
    };

    const submitHandler = () => {
        setShowState(true);
        const hasError = Object.values(errors).find((err) => err);
        if (hasError) return;
        const {
            createAddTitle,
            createStartDate,
            createEndDate,
            createCategory,
            createStartTime,
            createEndTime,
            createDescription,
        } = values;
        const start = createStartDate + "T" + createStartTime + ":00";
        const end = createEndDate + "T" + createEndTime + ":00";
        createEvent({
            id: uuidv4(),
            title: createAddTitle,
            start,
            end,
            category: createCategory,
            description: createDescription,
        });
        setValues((prev) => {
            return {
                ...prev,
                createAddTitle: "",
                createStartTime: "",
                createEndTime: "",
                createDescription: "",
                createCategory: "",
            };
        });
        onClose();
    };

    return (
        <Modal show={show} onClose={onClose}>
            <ModalBody>
                <h3>Create New Event</h3>
                <ModalClose onClose={onClose} />
                <form className="create-event-form">
                    <div className="mb-5">
                        <Input
                            id="createAddTitle"
                            name="createAddTitle"
                            placeholder="Add title"
                            value={values.createAddTitle}
                            onChange={changeHandler}
                            showState={showState}
                            state={errors.createAddTitle ? "error" : "success"}
                            feedbackText="Title is required"
                        />
                    </div>
                    <div className="mb-5 mt-[30px]">
                        <Label htmlFor="createStartDate">Start Date</Label>
                        <div className="grid grid-cols-12 gap-10">
                            <div className="col-span-7">
                                <DatePicker
                                    id="createStartDate"
                                    name="createStartDate"
                                    placeholder="Select Date"
                                    getDate={getDate}
                                    currentDate={currentDate.start}
                                />
                            </div>
                            <div className="col-span-5">
                                <Input
                                    type="time"
                                    id="createStartTime"
                                    name="createStartTime"
                                    value={values.createStartTime}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 mt-[30px]">
                        <Label htmlFor="createEndDate">End Date</Label>
                        <div className="grid grid-cols-12 gap-10">
                            <div className="col-span-7">
                                <DatePicker
                                    id="createStartDate"
                                    name="createStartDate"
                                    placeholder="Select Date"
                                    getDate={getDate}
                                    currentDate={currentDate.start}
                                />
                            </div>
                            <div className="col-span-5">
                                <Input
                                    type="time"
                                    id="createEndTime"
                                    name="createEndTime"
                                    value={values.createEndTime}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <Textarea
                            id="createDescription"
                            name="createDescription"
                            placeholder="Write some description (optional)"
                            value={values.createDescription}
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="mb-5">
                        <Label htmlFor="createCategory">Category</Label>
                        <SimpleSelect
                            id="createCategory"
                            name="createCategory"
                            value={values.createCategory}
                            onChange={changeHandler}
                            showState={showState}
                            state={errors.createCategory ? "error" : "success"}
                            feedbackText="Category is required"
                        >
                            <option value="">Select Category</option>
                            {categories.map((cat) => (
                                <option value={cat} key={cat}>
                                    {cat}
                                </option>
                            ))}
                        </SimpleSelect>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button type="submit" onClick={submitHandler} className="mr-2">
                    Add Event
                </Button>
                <Button color="secondary" onClick={onClose}>
                    Discard
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateEvent;
