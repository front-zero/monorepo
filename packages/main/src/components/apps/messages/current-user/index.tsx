import { FC } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import { Media, MediaLeft, MediaBody } from "@ht/components";
dayjs.extend(duration);
dayjs.extend(relativeTime);

interface IProps {
    name: string;
    image: {
        src: string;
        alt?: string;
    };
    lastSeenTime?: string;
}

const CurrentUser: FC<IProps> = ({ name, lastSeenTime, image }) => {
    return (
        <Media className="items-center">
            <MediaLeft className="w-[50px]">
                {image?.src && (
                    <img
                        src={image.src}
                        alt={image?.alt || name}
                        className="rounded-full"
                    />
                )}
            </MediaLeft>
            <MediaBody className="ml-3.8">
                <h6 className="text-[15px] mb-[5px]">{name}</h6>
                {lastSeenTime && (
                    <p className="mb-0 text-xs">
                        Last seen: {dayjs(lastSeenTime).fromNow()}
                    </p>
                )}
            </MediaBody>
        </Media>
    );
};

export default CurrentUser;
