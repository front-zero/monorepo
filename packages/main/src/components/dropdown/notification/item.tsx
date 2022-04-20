import { FC } from "react";
import clsx from "clsx";
import { Anchor, Media, MediaLeft, MediaBody } from "@ht/components";
import demoImg from "@ht/shared/images/img8.jpg";

interface IProps {
    status?: "read" | "unread";
}

const DropddownItem: FC<IProps> = ({ status }) => {
    const hoverClass =
        status === "unread" && "hover:bg-gray-200 focus:bg-gray-200";
    const readClass =
        status === "read" && "bg-gray-200 hover:bg-gray-300 hover:bg-gray-300";
    return (
        <Anchor
            path="/apps/messages"
            className={clsx(
                "block px-[0.938rem] py-[0.625rem] border-b border-b-geyser text-body",
                hoverClass,
                readClass
            )}
        >
            <Media>
                <MediaLeft className="w-[3.75rem] font-body">
                    <img
                        className="rounded-full"
                        src={demoImg}
                        alt="Notification"
                    />
                </MediaLeft>
                <MediaBody className="ml-[0.938rem]">
                    <p className="mb-1 text-sm">
                        <strong className="font-medium text-heading">
                            Suzzeth Bungaos
                        </strong>{" "}
                        tagged you and 18 others in a post.
                    </p>
                    <span className="text-pale block text-xs">
                        October 03, 2017 8:45am
                    </span>
                </MediaBody>
            </Media>
        </Anchor>
    );
};

DropddownItem.defaultProps = {
    status: "unread",
};

export default DropddownItem;
