import { FC } from "react";
import { Anchor } from "@ht/components";

interface IProps {
    date: string;
    title: string;
    path: string;
    author: {
        name: string;
        path: string;
        location?: string;
    };
    excerpt?: string;
    image?: {
        src: string;
        alt?: string;
    };
}

const Item: FC<IProps> = ({ date, title, path, author, excerpt, image }) => {
    return (
        <>
            <span className="block text-sm mb-2.5">{date}</span>
            <p className="font-medium mb-0.5">
                <Anchor className="text-heading" path={path}>
                    {title}
                </Anchor>
            </p>
            {author && (
                <p className="text-xs mb-0">
                    <Anchor path={author.path}>{author.name}</Anchor>{" "}
                    {author?.location && <>{author.location}</>}
                </p>
            )}
            {excerpt && <p className="text-xs mb-0 mt-2.5">{excerpt}</p>}
            {image?.src && (
                <Anchor className="block mt-3.8" path={path}>
                    <img
                        src={image.src}
                        alt={image?.alt || title}
                        width={227}
                        height={151}
                    />
                </Anchor>
            )}
        </>
    );
};

export default Item;
