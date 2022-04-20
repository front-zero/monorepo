import { FC } from "react";
import clsx from "clsx";
import { Media, MediaLeft, MediaBody } from "@ht/components";

interface IProps {
    image?: {
        src: string;
        alt?: string;
    };
    text: string;
    variant?: "mine" | "other";
}

const Message: FC<IProps> = ({ image, text, variant }) => {
    return (
        <Media className={clsx("p-3.8 lg:px-5")}>
            <MediaLeft
                className={clsx(
                    "relative w-[55px]",
                    variant === "other" && "order-2"
                )}
            >
                {image?.src && (
                    <img
                        src={image.src}
                        alt={image?.alt || "avatar"}
                        className="rounded-full"
                    />
                )}
            </MediaLeft>
            <MediaBody
                className={clsx(
                    "flex flex-col",
                    variant === "mine" && "ml-3.8",
                    variant === "other" && "items-end mr-3.8"
                )}
            >
                <div className="max-w-[80%] mt-[5px] first:mt-0">
                    <p
                        className={clsx(
                            "py-3 px-3.8 mb-0 inline-block",
                            variant === "mine" && "bg-royal text-white",
                            variant === "other" && "bg-geyser"
                        )}
                    >
                        {text}
                    </p>
                </div>
            </MediaBody>
        </Media>
    );
};

export default Message;
