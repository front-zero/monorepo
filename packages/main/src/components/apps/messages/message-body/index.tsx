import { FC } from "react";
import Message from "../message";

interface IProps {
    chats?: Array<{
        senderId: number | string;
        receiverId: number | string;
        message: string;
        sentAt: string;
    }>;
    friend: {
        id: number | string;
        avatar: { src: string };
    };
    me: {
        id: number | string;
        avatar: { src: string };
    };
}

const MessageBody: FC<IProps> = ({ chats, friend, me }) => {
    return (
        <div className="message-body">
            <div className="media-list">
                {chats?.map((chat, i) => {
                    const sender = chat.senderId === me.id ? me : friend;
                    return (
                        <Message
                            key={i}
                            image={sender.avatar}
                            text={chat.message}
                            variant={sender.id === me.id ? "mine" : "other"}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MessageBody;
