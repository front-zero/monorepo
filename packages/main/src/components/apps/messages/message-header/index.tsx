import { FC } from "react";
import CurrentUser from "../current-user";
import MessageOptions from "../message-options";
import { useChat } from "../../../../context/chat-context";

interface IProps {
    name: string;
    lastMessageTime?: string;
    avatar: { src: string };
}

const MessageHeader: FC<IProps> = ({ name, lastMessageTime, avatar }) => {
    const { bodyOpen: _bodyOpen, setBodyOpen } = useChat();
    return (
        <div className="message-header px-5 border-b border-b-geyser h-20 flex items-center">
            <button
                type="button"
                className="mr-3.8 text-3xl text-primary lg:hidden"
                onClick={setBodyOpen}
            >
                <i className="fa fa-angle-left"></i>
            </button>
            <CurrentUser
                name={name}
                lastSeenTime={lastMessageTime}
                image={avatar}
            />
            <MessageOptions name={name} image={avatar} />
        </div>
    );
};

export default MessageHeader;
