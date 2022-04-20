import { FC, useState } from "react";
import { Media, MediaBody, Anchor } from "@ht/components";

interface IProps {
    image: {
        src: string;
        alt?: string;
    };
    name: string;
    designation: string;
    path: string;
    isInFriendList?: boolean;
}

const People: FC<IProps> = ({
    image,
    name,
    designation,
    path,
    isInFriendList,
}) => {
    const [friend, setFriend] = useState(isInFriendList);
    return (
        <Media className="items-center py-3.8 border-t border-t-geyser first:border-0 first:pt-0 last:pb-0">
            {image?.src && (
                <img
                    src={image.src}
                    alt={image?.alt || name}
                    className="w-[45px] rounded-full"
                    width={45}
                    height={45}
                />
            )}
            <MediaBody className="ml-3.8">
                <Anchor path={path} className="block">
                    {name}
                </Anchor>
                <p className="mb-0 text-xs">{designation}</p>
            </MediaBody>
            {!friend && (
                <button
                    type="button"
                    className="text-primary"
                    onClick={() => setFriend(true)}
                >
                    <i className="icon ion-person-add text-[20px]" />
                </button>
            )}
        </Media>
    );
};

export default People;
