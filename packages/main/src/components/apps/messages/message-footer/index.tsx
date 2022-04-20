import { Dispatch, FC, SetStateAction, useState } from "react";
import dayjs from "dayjs";
import { Input, Button } from "@ht/components";
import { useChat } from "../../../../context/chat-context";

interface IProps {
    myId: string | number;
    friendId: string | number;
    setIsScroll: Dispatch<SetStateAction<boolean>>;
}

const MessageFooter: FC<IProps> = ({ myId, friendId, setIsScroll }) => {
    const { pushChat } = useChat();
    const [text, setText] = useState("");
    const submitHandler = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (!text || !pushChat) return;
        const chat = {
            senderId: myId,
            receiverId: friendId,
            message: text,
            sentAt: dayjs(new Date()).locale(),
        };
        pushChat(chat);
        setText("");
        setIsScroll((prev) => !prev);
    };
    return (
        <div className="message-footer bg-white px-5 border-t border-t-geyser h-[65px] flex items-center">
            <form
                className="flex justify-between flex-auto"
                onSubmit={submitHandler}
            >
                <div className="w-3/5 md:w-3/4">
                    <Input
                        id="message"
                        name="message"
                        placeholder="Type something here..."
                        value={text}
                        className="border-0 px-0"
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="w-2/5 md:w-1/4 text-right">
                    <Button type="submit">Send</Button>
                </div>
            </form>
        </div>
    );
};

export default MessageFooter;
