import { createContext, useContext, FC, useReducer } from "react";
import { IContact } from "@ht/shared/types";
import { slugify } from "@ht/shared/methods";

export type ContactContextType = {
    allContacts: IContact[];
    contactToShow: IContact[];
    contactList?: IContact[];
    hasMore?: boolean;
    loadMoreContact: () => void;
    filterContact: (param: string, value: string) => void;
};

const CONTACT_SHOW_IN_DEFAULT = 9;
const LOAD_MORE = 3;

interface IProps {
    allContacts: IContact[];
}

// const initialState: IContact[] = [];

interface ContactAction {
    type: "LOAD_MORE" | "CONTACT_FILTER";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}

interface ContactState {
    allContacts: IContact[];
    contactToShow: IContact[];
    contactList: IContact[];
    hasMore: boolean;
}

// Load More function

const loadMoreContact = (
    allContacts: IContact[],
    contactList: IContact[]
): { newContactList: IContact[]; hasMore: boolean } => {
    if (allContacts.length - contactList.length <= 0)
        return { newContactList: contactList, hasMore: false };
    const newContactList = [...allContacts].slice(
        0,
        contactList.length + LOAD_MORE
    );
    return {
        newContactList,
        hasMore: allContacts.length - newContactList.length > 0,
    };
};

// Contact Reducer

function reducer(state: ContactState, action: ContactAction) {
    switch (action.type) {
        case "LOAD_MORE":
            return {
                ...state,
                contactList: loadMoreContact(
                    state.contactToShow,
                    state?.contactList || []
                ).newContactList,
                hasMore: loadMoreContact(
                    state.contactToShow,
                    state?.contactList || []
                ).hasMore,
            };
        case "CONTACT_FILTER": {
            const param = action.payload.filterParam as keyof IContact;
            const contactToShow =
                action.payload?.filterValue === "all"
                    ? state.allContacts
                    : state.allContacts.filter(
                          (con) =>
                              slugify(con[param] as string) ===
                              action.payload.filterValue
                      );
            return {
                ...state,
                contactToShow: contactToShow,
                contactList: contactToShow.slice(0, CONTACT_SHOW_IN_DEFAULT),
                hasMore: contactToShow.length > CONTACT_SHOW_IN_DEFAULT,
            };
        }
        default:
            return state;
    }
}

// Create Context

export const ContactContext = createContext<ContactContextType>({
    allContacts: [],
    contactToShow: [],
    contactList: [],
    loadMoreContact: () => {},
    filterContact: () => {},
});

// Contact Provider

export const ContactContextProvider: FC<IProps> = ({
    children,
    allContacts,
}) => {
    const initialState = {
        allContacts: allContacts,
        contactToShow: allContacts,
        contactList: allContacts.slice(0, CONTACT_SHOW_IN_DEFAULT),
        hasMore: allContacts.length > CONTACT_SHOW_IN_DEFAULT,
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        ...state,
        loadMoreContact: () => {
            dispatch({ type: "LOAD_MORE" });
        },
        filterContact: (filterParam: string, filterValue: string) => {
            dispatch({
                type: "CONTACT_FILTER",
                payload: { filterParam, filterValue },
            });
        },
    };
    return (
        <ContactContext.Provider value={value}>
            {children}
        </ContactContext.Provider>
    );
};

// Contact Hook

export const useContact = () => useContext(ContactContext);
