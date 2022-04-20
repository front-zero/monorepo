import { FC, useState } from "react";
import dayjs from "dayjs";
import { Modal, ModalHeader, ModalBody, Button } from "@ht/components";
import EditEventForm from "../edit-event";
import { useEvent } from "../../../../context/event-context";

export interface IEventDetails {
    category:
        | "calendar"
        | "birthday"
        | "holiday"
        | "discover"
        | "meetup"
        | "other";
    bg: string;
    event: {
        id: string;
        title: string;
        start: string;
        end: string;
        description?: string;
    };
}
interface IProps {
    show: boolean;
    onClose: () => void;
    details: IEventDetails;
}

const CreateEvent: FC<IProps> = ({ show, onClose, details }) => {
    const { deleteEvent } = useEvent();
    const [showEdit, setShowEdit] = useState(false);
    const handleEdit = () => {
        setShowEdit((prev) => !prev);
    };

    const deleteHandler = () => {
        deleteEvent(details?.event.id, details?.category);
        onClose();
    };

    return (
        <Modal show={show} onClose={onClose}>
            <ModalHeader style={{ background: details.bg }}>
                <h4 className="text-white mb-0 font-normal">
                    {showEdit && (
                        <button className="mr-2" onClick={handleEdit}>
                            <i className="ion ion-arrow-left-c text-white" />
                        </button>
                    )}

                    {details.event?.title}
                </h4>
                <nav>
                    <button
                        type="button"
                        className="mr-2 text-lg"
                        onClick={handleEdit}
                    >
                        <i className="ion ion-edit text-white" />
                    </button>
                    <button
                        type="button"
                        className="mr-2 text-lg"
                        onClick={deleteHandler}
                    >
                        <i className="ion ion-trash-b text-white" />
                    </button>
                    <button
                        type="button"
                        className="mr-2 text-lg"
                        onClick={onClose}
                    >
                        <i className="ion-close text-white" />
                    </button>
                </nav>
            </ModalHeader>
            <ModalBody>
                {showEdit ? (
                    <EditEventForm
                        category={details?.category}
                        id={details.event?.id}
                        title={details.event?.title}
                        startDate={details.event?.start}
                        endDate={details.event?.start}
                        description={details.event?.description}
                        onClose={onClose}
                    />
                ) : (
                    <div className="event-details">
                        <div className="flex justify-between">
                            <div>
                                <h4 className="text-gray-800 font-normal text-base">
                                    Start Date
                                </h4>
                                <p className="text-heading">
                                    {dayjs(details.event?.start).format(
                                        "MMMM DD YYYY, h:mm:ss A"
                                    )}
                                </p>
                            </div>
                            <div>
                                <h4 className="text-gray-800 font-normal text-base">
                                    End Date
                                </h4>
                                <p className="text-heading">
                                    {dayjs(details.event?.end).format(
                                        "MMMM DD YYYY, h:mm:ss A"
                                    )}
                                </p>
                            </div>
                        </div>
                        {details?.event?.description && (
                            <div>
                                <h4 className="text-gray-800 font-normal text-base">
                                    Description
                                </h4>
                                <p className="text-heading">
                                    {details.event.description}
                                </p>
                            </div>
                        )}

                        <Button color="secondary" onClick={onClose}>
                            Close
                        </Button>
                    </div>
                )}
            </ModalBody>
        </Modal>
    );
};

export default CreateEvent;
