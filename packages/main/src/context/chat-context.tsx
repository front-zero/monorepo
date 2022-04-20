import {
    createContext,
    useContext,
    FC,
    useState,
    useReducer,
    useEffect,
} from "react";
import myData from "@ht/shared/data/chat/me";
import friendsData from "@ht/shared/data/chat/friends";
import chatsData from "@ht/shared/data/chat/chats";
import { IFriend, IChat, TID } from "@ht/shared/types";

interface ChatType {
    [x: TID]: IChat[];
}

interface ChatState {
    me: typeof myData;
    allFriends?: IFriend[];
    friends?: IFriend[];
    chats: IChat[];
    messages?: ChatType;
    chatById?: IChat[];
    hasMoreFriends: boolean;
    friend?: IFriend;
    lastMessages?: {
        [x: TID]: {
            message: string;
            messageTime: string;
        };
    };
    lastMsg?: {
        message: string;
        messageTime: string;
    };
}

export type ChatContextType = ChatState & {
    bodyOpen: boolean;
    setBodyOpen: () => void;
    fetchFriends: () => void;
    fetchMoreFriends: () => void;
    fetchChatsById?: (id: TID) => void;
    pushChat?: (chat: IChat) => void;
    fetchLastMessage?: (id: TID) => void;
};

interface ChatAction {
    type:
        | "FETCH_CHATS_BY_ID"
        | "FETCH_FRIENDS"
        | "FETCH_MORE_FRIENDS"
        | "PUSH_CHAT"
        | "FETCH_LAST_MESSAGES"
        | "FETCH_LAST_MESSAGE";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}

const mappedChats = (chats: IChat[], ids: TID[]) => {
    const allContetnt: { [x: TID]: IChat[] } = {};
    chats.forEach((item) => {
        const index =
            ids.indexOf(item.senderId) !== -1
                ? ids.indexOf(item.senderId)
                : ids.indexOf(item.receiverId);
        if (index !== -1) {
            if (!allContetnt[ids[index]]) {
                allContetnt[ids[index]] = [];
            }
            allContetnt[ids[index]].push(item);
        }
    });
    return allContetnt;
};

const initialState = {
    me: myData,
    chats: chatsData,
    allFriends: [],
    hasMoreFriends: true,
};

export const ChatContext = createContext<ChatContextType>({
    bodyOpen: false,
    setBodyOpen: () => null,
    fetchFriends: () => null,
    fetchMoreFriends: () => null,
    ...initialState,
});

// Chat Reducer

function reducer(state: ChatState, action: ChatAction) {
    switch (action.type) {
        case "FETCH_FRIENDS": {
            const frnds = friendsData.slice(0, 8);
            const friendIds = friendsData.map((frnd) => frnd.id);
            const chats = mappedChats(chatsData, friendIds);
            return {
                ...state,
                allFriends: friendsData,
                friends: frnds,
                messages: chats,
                hasMoreFriends: friendsData.length > frnds.length,
            };
        }
        case "FETCH_MORE_FRIENDS": {
            const { friends, allFriends } = state;
            if (!friends || !allFriends) {
                return state;
            }

            const frnds = [
                ...friends,
                ...allFriends.slice(friends.length, friends.length + 3),
            ];
            return {
                ...state,
                friends: frnds,
                hasMoreFriends: friendsData.length > frnds.length,
            };
        }
        case "FETCH_CHATS_BY_ID": {
            const frndId = action.payload as TID;
            const { messages } = state;
            if (!messages) return state;
            const chats = messages?.[frndId] || [];

            return {
                ...state,
                friend: state?.allFriends?.find(
                    (fnd) => fnd.id.toString() === frndId.toString()
                ),
                chatById: chats.sort(
                    (a, b) =>
                        new Date(a.sentAt).getTime() -
                        new Date(b.sentAt).getTime()
                ),
            };
        }
        case "PUSH_CHAT": {
            const { messages } = state;
            const chat = action.payload as IChat;
            const newChats: ChatType = {
                ...messages,
                [chat.receiverId]: [
                    ...(messages?.[chat.receiverId] || []),
                    chat,
                ],
            };

            return {
                ...state,
                messages: newChats,
            };
        }
        case "FETCH_LAST_MESSAGES": {
            const { messages, allFriends } = state;
            if (!allFriends) return state;
            const lastMsgs: {
                [x: TID]: {
                    message: string;
                    messageTime: string;
                };
            } = {};
            allFriends.forEach((frnd) => {
                const id = frnd.id;
                const chats = messages?.[id] || [];
                if (chats.length > 0) {
                    const lastMsg = chats[chats.length - 1]?.message;
                    const sendingMsgs = chats
                        .filter((cht) => cht.senderId === id)
                        .sort(
                            (a, b) =>
                                new Date(a.sentAt).getTime() -
                                new Date(b.sentAt).getTime()
                        );
                    const lastMsgTime =
                        sendingMsgs[sendingMsgs.length - 1]?.sentAt;
                    lastMsgs[id] = {
                        message: lastMsg,
                        messageTime: lastMsgTime,
                    };
                }
            });

            return { ...state, lastMessages: lastMsgs };
        }

        default:
            return state;
    }
}

export const ChatContextProvider: FC = ({ children }) => {
    const [bodyOpen, setBodyOpen] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    const onChatClickHandler = () => {
        setBodyOpen((prev) => !prev);
    };

    const value = {
        ...state,
        bodyOpen,
        setBodyOpen: onChatClickHandler,
        fetchFriends: () => {
            dispatch({ type: "FETCH_FRIENDS" });
        },
        fetchMoreFriends: () => {
            dispatch({ type: "FETCH_MORE_FRIENDS" });
            dispatch({ type: "FETCH_LAST_MESSAGES" });
        },
        fetchChatsById: (frndId: string | number) => {
            dispatch({ type: "FETCH_CHATS_BY_ID", payload: frndId });
            dispatch({ type: "FETCH_LAST_MESSAGES" });
        },
        pushChat: (chat: IChat) => {
            dispatch({ type: "PUSH_CHAT", payload: chat });
            dispatch({ type: "FETCH_CHATS_BY_ID", payload: chat.receiverId });
            dispatch({ type: "FETCH_LAST_MESSAGES" });
        },
    };
    useEffect(() => {
        dispatch({ type: "FETCH_FRIENDS" });
    }, []);
    return (
        <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);
