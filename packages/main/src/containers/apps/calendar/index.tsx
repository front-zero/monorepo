/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import FullCalendar, { ViewContentArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEvent } from "../../../context/event-context";
import CreateEvent from "../../../components/apps/calendar/create-event";
import EventDetails, {
    IEventDetails,
} from "../../../components/apps/calendar/event-details";
import "./style.css";

const CalednarApp = () => {
    const { eventSources } = useEvent();
    const categories = eventSources.map((evt) => evt.category);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [eventDetails, setEventDetails] = useState({} as IEventDetails);
    const [selectDate, setSelectDate] = useState<{ start: Date; end: Date }>({
        start: new Date(),
        end: new Date(),
    });
    const calendarRef = useRef({} as any);
    const handleCreateModal = () => {
        setShowCreateModal((prev) => !prev);
    };
    const handleDateSelect = (info: { start: Date; end: Date }): void => {
        setSelectDate({ start: info.start, end: info.end });
        handleCreateModal();
    };
    const handleDetailsModal = () => {
        setShowDetailsModal((prev) => !prev);
    };

    const handleSize = (event: ViewContentArg): void => {
        const contentAPi = event.view.calendar;
        const { type } = event.view;
        if (type === "listWeek") {
            if (window.matchMedia("(min-width: 992px)").matches) {
                contentAPi.changeView("dayGridMonth");
            } else {
                contentAPi.changeView("listWeek");
            }
        }
    };

    const eventRender = (info: any) => {
        const { el, event } = info;
        const mainEl = el.querySelector(".fc-event-main-frame");
        const desc: string | undefined = event._def.extendedProps.description;
        if (desc && mainEl) {
            mainEl.insertAdjacentHTML(
                "beforeend",
                `<span class="fc-event-desc">${desc}</span>`
            );
        }
    };
    const handleEventClick = (info: any): void => {
        const { id } = info.event;
        const { category } =
            info.event.source.internalEventSource.extendedProps;
        const bg = info.event.source.internalEventSource.ui.borderColor;
        const { meta } = info.event.source.internalEventSource;
        const selectedEvent = meta.find(
            (item: { id: string }) => item.id === id
        );

        setEventDetails({
            category,
            bg,
            event: selectedEvent,
        });
        handleDetailsModal();
    };

    return (
        <>
            <div className="relative bg-white min-h-screen">
                <div className="absolute inset-[25px]">
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        headerToolbar={{
                            left: "prev",
                            center: "title",
                            right: "today next",
                        }}
                        initialView="dayGridMonth"
                        navLinks
                        selectable
                        selectLongPressDelay={100}
                        editable
                        nowIndicator
                        eventDisplay="block"
                        eventSources={eventSources}
                        eventDidMount={eventRender}
                        ref={calendarRef}
                        windowResize={handleSize}
                        eventClick={handleEventClick}
                        select={handleDateSelect}
                    />
                </div>
            </div>
            <CreateEvent
                show={showCreateModal}
                onClose={handleCreateModal}
                currentDate={selectDate}
                categories={categories}
            />
            <EventDetails
                show={showDetailsModal}
                onClose={handleDetailsModal}
                details={eventDetails}
            />
        </>
    );
};

export default CalednarApp;
