import { createContext, useContext, FC, useReducer } from "react";

// Demo Data
import aboutData from "@ht/shared/data/profile/about";
import experienceData from "@ht/shared/data/profile/experience";

const initialState = {
    about: aboutData,
    allExperiences: experienceData.items,
    experiences: experienceData.items.slice(0, 1),
    hasMoreExperiences: experienceData.items.length > 1,
};
type TAbout = typeof aboutData;

export type ProfileContextType = typeof initialState & {
    editAbout?: (data: Omit<TAbout, "path" | "image">) => void;
    experienceToggle?: () => void;
    addExperience?: (data: typeof initialState.allExperiences[0]) => void;
};

interface ProfileAction {
    type: "EDIT_ABOUT" | "EXPERIENCE_TOGGLE" | "ADD_EXPERIENCE";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}

type ProfileState = typeof initialState;

function reducer(state: ProfileState, action: ProfileAction) {
    switch (action.type) {
        case "EDIT_ABOUT": {
            return {
                ...state,
                about: action.payload,
            };
        }
        case "EXPERIENCE_TOGGLE": {
            const { hasMoreExperiences, allExperiences, experiences } = state;
            const currentItems = hasMoreExperiences
                ? [
                      ...experiences,
                      ...allExperiences.slice(
                          experiences.length,
                          experiences.length + 3
                      ),
                  ]
                : allExperiences.slice(0, 1);
            return {
                ...state,
                experiences: currentItems,
                hasMoreExperiences: allExperiences > currentItems,
            };
        }

        case "ADD_EXPERIENCE": {
            return {
                ...state,
                allExperiences: [...state.allExperiences, action.payload],
                hasMoreExperiences:
                    state.allExperiences.length > state.experiences.length,
            };
        }

        default:
            return state;
    }
}

// Create Context

export const ProfileContext = createContext<ProfileContextType>({
    ...initialState,
});

// Contact Provider

export const FileProvider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        ...state,
        editAbout: (data: Omit<TAbout, "path" | "image">) => {
            dispatch({
                type: "EDIT_ABOUT",
                payload: data,
            });
        },
        experienceToggle: () => {
            dispatch({
                type: "EXPERIENCE_TOGGLE",
            });
        },
        addExperience: (data: typeof initialState.allExperiences[0]) => {
            dispatch({
                type: "ADD_EXPERIENCE",
                payload: data,
            });
        },
    };
    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
};

// Contact Hook

export const useProfile = () => useContext(ProfileContext);
