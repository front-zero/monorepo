import { createContext, useContext, FC, useReducer } from "react";
import { IFile } from "@ht/shared/types";
import { slugify } from "@ht/shared/methods";

export type FileContextType = {
    allFiles: IFile[];
    fileToShow: IFile[];
    fileList?: IFile[];
    hasMore?: boolean;
    loadMoreFile: () => void;
    filterFile: (param: string, value: string) => void;
};

const FILE_SHOW_IN_DEFAULT = 9;
const LOAD_MORE = 3;

interface IProps {
    allFiles: IFile[];
}

interface FileAction {
    type: "LOAD_MORE" | "FILE_FILTER";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}

interface FileState {
    allFiles: IFile[];
    fileToShow: IFile[];
    fileList: IFile[];
    hasMore: boolean;
}

const loadMoreFile = (
    allFiles: IFile[],
    fileList: IFile[]
): { newFileList: IFile[]; hasMore: boolean } => {
    if (allFiles.length - fileList.length <= 0)
        return { newFileList: fileList, hasMore: false };
    const newFileList = [...allFiles].slice(0, fileList.length + LOAD_MORE);
    return {
        newFileList,
        hasMore: allFiles.length - newFileList.length > 0,
    };
};

function reducer(state: FileState, action: FileAction) {
    switch (action.type) {
        case "LOAD_MORE": {
            const files = loadMoreFile(state.fileToShow, state?.fileList || []);
            return {
                ...state,
                fileList: files.newFileList,
                hasMore: files.hasMore,
            };
        }
        case "FILE_FILTER": {
            const param = action.payload.filterParam as keyof IFile;
            const fileToShow =
                action.payload?.filterValue === "all"
                    ? state.allFiles
                    : state.allFiles.filter(
                          (con) =>
                              slugify(con[param] as string) ===
                              action.payload.filterValue
                      );
            return {
                ...state,
                fileToShow: fileToShow,
                fileList: fileToShow.slice(0, FILE_SHOW_IN_DEFAULT),
                hasMore: fileToShow.length > FILE_SHOW_IN_DEFAULT,
            };
        }
        default:
            return state;
    }
}

// Create Context

export const FileContext = createContext<FileContextType>({
    allFiles: [],
    fileToShow: [],
    fileList: [],
    loadMoreFile: () => {},
    filterFile: () => {},
});

// Contact Provider

export const FileContextProvider: FC<IProps> = ({ children, allFiles }) => {
    const initialState = {
        allFiles: allFiles,
        fileToShow: allFiles,
        fileList: allFiles.slice(0, FILE_SHOW_IN_DEFAULT),
        hasMore: allFiles.length > FILE_SHOW_IN_DEFAULT,
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        ...state,
        loadMoreFile: () => {
            dispatch({ type: "LOAD_MORE" });
        },
        filterFile: (filterParam: string, filterValue: string) => {
            dispatch({
                type: "FILE_FILTER",
                payload: { filterParam, filterValue },
            });
        },
    };
    return (
        <FileContext.Provider value={value}>{children}</FileContext.Provider>
    );
};

// Contact Hook

export const useFile = () => useContext(FileContext);
