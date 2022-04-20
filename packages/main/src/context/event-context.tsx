import { createContext, useContext, FC, useReducer } from "react";
import {
    calendarEvents,
    birthdayEvents,
    holidayEvents,
    discoveredEvents,
    meetupEvents,
    otherEvents,
} from "@ht/shared/data/events";
import { IEvent } from "@ht/shared/types";

interface IEventState {
    id: string;
    title: string;
    start: string;
    end: string;
    category: string;
    description?: string;
}

export type EventContextType = {
    eventSources: IEvent[];
    createEvent: (event: IEventState) => void;
    editEvent: (event: IEventState) => void;
    deleteEvent: (id: string, category: string) => void;
};

export const EventContext = createContext<EventContextType>({
    eventSources: [],
    createEvent: () => {},
    editEvent: () => {},
    deleteEvent: () => {},
});
export interface EvenState {
    eventSources: IEvent[];
}

const initialState: EvenState = {
    eventSources: [
        calendarEvents,
        birthdayEvents,
        holidayEvents,
        discoveredEvents,
        meetupEvents,
        otherEvents,
    ],
};

interface EventAction {
    type: "CREATE_EVENT" | "EDIT_EVENT" | "DELETE_EVENT";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}

function reducer(state: EvenState, action: EventAction) {
    switch (action.type) {
        case "CREATE_EVENT": {
            const {
                payload: { category, ...data },
            } = action;
            const source = state.eventSources.find(
                (src) => src.category === category
            );
            source?.events.push(data as IEventState);
            const events = state.eventSources.map((obj) => {
                if (source?.category === obj.category) {
                    return {
                        ...obj,
                        events: [...obj.events],
                    };
                }
                return obj;
            });

            return {
                ...state,
                eventSources: [...events],
            };
        }
        case "EDIT_EVENT": {
            const {
                payload: { category, ...data },
            } = action;
            const evtSources = [...state.eventSources];
            const source = evtSources.find((src) => src.category === category);
            if (source) {
                const index = source.events.findIndex(
                    (el) => el.id === data.id
                );
                if (index !== undefined && index >= 0) {
                    source.events[index] = data;
                }
            }
            const events = evtSources.map((obj) => {
                if (source?.category === obj.category) {
                    return { ...source, events: [...source.events] };
                }
                return obj;
            });

            return {
                ...state,
                eventSources: events,
            };
        }
        case "DELETE_EVENT": {
            const {
                payload: { id, category },
            } = action;
            const evtSources = [...state.eventSources];
            const source = evtSources.find((src) => src.category === category);
            if (source) {
                const index = source.events.findIndex((el) => el.id === id);
                if (index !== undefined && index >= 0) {
                    source.events.splice(index, 1);
                }
            }
            const events = evtSources.map((obj) => {
                if (source?.category === obj.category) {
                    return { ...source, events: [...source.events] };
                }
                return obj;
            });
            return {
                ...state,
                eventSources: events,
            };
        }
        default:
            return state;
    }
}

export const EventContextProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        ...state,
        createEvent: (event: IEventState) => {
            dispatch({
                type: "CREATE_EVENT",
                payload: event,
            });
        },
        editEvent: (event: IEventState) => {
            dispatch({
                type: "EDIT_EVENT",
                payload: event,
            });
        },
        deleteEvent: (id: string, category: string) => {
            dispatch({
                type: "DELETE_EVENT",
                payload: { id, category },
            });
        },
    };
    return (
        <EventContext.Provider value={value}>{children}</EventContext.Provider>
    );
};

// Contact Hook

export const useEvent = () => useContext(EventContext);
