/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { FC, useState, useEffect, ChangeEvent } from "react";
import dayjs from "dayjs";
import { Button, Input, Textarea } from "@ht/components";
import DatePicker from "../../../date-picker";
import Label from "../label";
import { useEvent } from "../../../../context/event-context";

interface IProps {
    id: string;
    category: string;
    title: string;
    startDate: string;
    endDate: string;
    description?: string;
    onClose: () => void;
}

const EditEventForm: FC<IProps> = ({
    id,
    category,
    title,
    startDate,
    endDate,
    description,
    onClose,
}) => {
    const { editEvent } = useEvent();
    const [values, setValues] = useState({
        editAddTitle: "",
        editStartDate: "",
        editStartTime: "",
        editEndDate: "",
        editEndTime: "",
        editDescription: "",
    });
    const [showState, setShowState] = useState(false);
    const [errors, setErrors] = useState({
        editAddTitle: false,
        editStartDate: false,
        editStartTime: false,
        editEndDate: false,
        editEndTime: false,
        editDescription: false,
    });
    useEffect(() => {
        setValues((prev) => {
            return {
                ...prev,
                editAddTitle: title,
                editStartDate: dayjs(startDate).format("YYYY-MM-DD"),
                editStartTime: dayjs(startDate).format("HH:mm"),
                editEndDate: dayjs(endDate).format("YYYY-MM-DD"),
                editEndTime: dayjs(endDate).format("HH:mm"),
                editDescription: description || "",
            };
        });
    }, [title, startDate, endDate, description]);

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
                [name]: dayjs(new Date(date)).format("YYYY-MM-DD"),
            };
        });
    };

    const submitHandler = () => {
        setShowState(true);
        const hasError = Object.values(errors).find((err) => err);
        if (hasError) return;
        const {
            editAddTitle,
            editStartDate,
            editEndDate,
            editStartTime,
            editEndTime,
            editDescription,
        } = values;
        const start = editStartDate + "T" + editStartTime + ":00";
        const end = editEndDate + "T" + editEndTime + ":00";
        editEvent({
            id,
            title: editAddTitle,
            start,
            end,
            category: category,
            description: editDescription,
        });
        onClose();
    };

    return (
        <form className="edit-event-form">
            <div className="mb-5">
                <Input
                    id="editAddTitle"
                    name="editAddTitle"
                    placeholder="Add title"
                    value={values.editAddTitle}
                    onChange={changeHandler}
                    showState={showState}
                    state={errors.editAddTitle ? "error" : "success"}
                    feedbackText="Title is required"
                />
            </div>
            <div className="mb-5 mt-[30px]">
                <Label htmlFor="editStartDate">Start Date</Label>
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-7">
                        <DatePicker
                            id="editStartDate"
                            name="editStartDate"
                            placeholder="Select Date"
                            getDate={getDate}
                            currentDate={new Date(startDate)}
                        />
                    </div>
                    <div className="col-span-5">
                        <Input
                            type="time"
                            id="editStartTime"
                            name="editStartTime"
                            value={values.editStartTime}
                            onChange={changeHandler}
                        />
                    </div>
                </div>
            </div>
            <div className="mb-5 mt-[30px]">
                <Label htmlFor="editEndDate">End Date</Label>
                <div className="grid grid-cols-12 gap-10">
                    <div className="col-span-7">
                        <DatePicker
                            id="editStartDate"
                            name="editStartDate"
                            placeholder="Select Date"
                            getDate={getDate}
                            currentDate={new Date(endDate)}
                        />
                    </div>
                    <div className="col-span-5">
                        <Input
                            type="time"
                            id="editEndTime"
                            name="editEndTime"
                            value={values.editEndTime}
                            onChange={changeHandler}
                        />
                    </div>
                </div>
            </div>
            {description && (
                <div className="mb-5">
                    <Textarea
                        id="editDescription"
                        name="editDescription"
                        placeholder="Write some description (optional)"
                        value={values.editDescription}
                        onChange={changeHandler}
                    />
                </div>
            )}
            <div>
                <Button onClick={submitHandler} className="mr-1.5">
                    Save Changes
                </Button>
                <Button color="secondary" onClick={onClose}>
                    Discard
                </Button>
            </div>
        </form>
    );
};

export default EditEventForm;
