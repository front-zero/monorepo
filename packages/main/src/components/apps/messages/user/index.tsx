import { FC } from "react";
import dayjs from "dayjs";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { Media, MediaLeft, MediaBody } from "@ht/components";
import { useChat } from "../../../../context/chat-context";

interface IProps {
    path: string;
    id: string | number;
    name: string;
    image: {
        src: string;
        alt?: string;
    };
    status: "online" | "offline";
    unseenMsgCount?: number;
    active?: boolean;
    onClick: () => void;
}

const Message: FC<IProps> = ({
    path,
    id,
    name,
    image,
    status,
    unseenMsgCount,
    active,
    onClick,
}) => {
    const navigate = useNavigate();
    const { lastMessages } = useChat();
    const lastMsg = lastMessages?.[id];

    const navigationHandler = () => {
        navigate(path);
        onClick();
    };

    return (
        <Media
            className={clsx(
                "relative p-3.8 transition-colors border-t border-t-ghost first:border-t-0 sm:border-l sm:border-l-ghost",
                !unseenMsgCount && "bg-gray-200 hover:bg-gray-150",
                unseenMsgCount && "bg-white",
                "before:absolute before:content-[''] before:top-0 before:bottom-0 before:-left-px before:w-0.5 before:bg-primary before:opacity-0 before:transition-opacity hover:before:opacity-100",
                active && !unseenMsgCount && "bg-gray-150 before:opacity-100"
            )}
        >
            <MediaLeft className="relative w-[55px]">
                {image?.src && (
                    <img
                        src={image.src}
                        alt={image?.alt || name}
                        className="rounded-full"
                    />
                )}

                <span
                    className={clsx(
                        "w-2.5 h-2.5 absolute bottom-0 right-[5px] border-2 border-gray-300 rounded-full",
                        status === "online" && "bg-success",
                        status === "offline" && "bg-gray-600"
                    )}
                />
            </MediaLeft>
            <MediaBody className="flex justify-between items-start ml-3.8">
                <div className="flex-1">
                    <h6 className="text-base text-trout mb-[5px]">{name}</h6>
                    <p className="mb-0 text-sm text-secondary">
                        {lastMsg?.message}
                    </p>
                </div>
                <div className="text-right">
                    {lastMsg?.messageTime && (
                        <span className="text-xs text-gray-600 block">
                            {dayjs(lastMsg.messageTime).format("MMM DD")}
                        </span>
                    )}
                </div>
            </MediaBody>
            <button
                type="button"
                className="absolute inset-0"
                onClick={navigationHandler}
            />
        </Media>
    );
};

export default Message;
