import { useEffect, useState } from "react";
import clsx from "clsx";
import { useParams } from "react-router-dom";
import { ScrollBar } from "@ht/components";
import MessageHeader from "../../../../components/apps/messages/message-header";
import MessageBody from "../../../../components/apps/messages/message-body";
import MessageFooter from "../../../../components/apps/messages/message-footer";
import { useChat } from "../../../../context/chat-context";

const Main = () => {
    const [isScroll, setIsScroll] = useState(false);
    const { chatId } = useParams();
    const { bodyOpen, friend, fetchChatsById, chatById, me, lastMessages } =
        useChat();
    useEffect(() => {
        if (!chatId || !fetchChatsById) return;
        fetchChatsById(chatId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chatId]);

    return (
        <div
            className={clsx(
                "main-content border border-ghost bg-white h-[calc(100vh_-_100px)] md:h-[calc(100vh_-_123px)] lg:h-[calc(100vh_-_205px)] maxLg:absolute maxLg:w-full maxLg:transition-transform",
                !bodyOpen &&
                    "maxLg:invisible maxLg:translate-x-[calc(100%_+_100px)]",
                bodyOpen && "maxLg:visible maxLg:translate-x-0"
            )}
        >
            {friend && (
                <>
                    <MessageHeader
                        name={friend.name}
                        avatar={friend.avatar}
                        lastMessageTime={lastMessages?.[friend.id]?.messageTime}
                    />
                    <ScrollBar
                        initialView="bottom"
                        bottom="145px"
                        isPositionChange={isScroll}
                    >
                        <MessageBody
                            chats={chatById}
                            me={{ id: me.id, avatar: me.avatar }}
                            friend={{ id: friend.id, avatar: friend.avatar }}
                        />
                    </ScrollBar>
                    <MessageFooter
                        myId={me.id}
                        friendId={friend.id}
                        setIsScroll={setIsScroll}
                    />
                </>
            )}
        </div>
    );
};

export default Main;
