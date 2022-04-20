import { FC } from "react";
import { Anchor } from "@ht/components";

interface IProps {
    title: string;
    path: string;
    author: {
        name: string;
        path: string;
        location?: string;
    };
    excerpt: string;
    images?: Array<{
        src: string;
        alt?: string;
    }>;
}

const Post: FC<IProps> = ({ title, path, author, excerpt, images }) => {
    return (
        <>
            <p className="ont-medium mb-0">
                <Anchor className="text-heading" path={path}>
                    {title}
                </Anchor>
            </p>
            {author && (
                <p className="text-xs mb-3.7">
                    <Anchor path={author.path}>{author.name}</Anchor>{" "}
                    {author?.location && <>{author.location}</>}
                </p>
            )}
            <p className="mb-3.8">{excerpt}</p>
            {images && (
                <div className="grid sm:grid-cols-2 gap-2.5 mb-3.8">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img.src}
                            alt={img?.alt || title}
                            width={299}
                            height={199}
                        />
                    ))}
                </div>
            )}

            <div className="text-xs">
                <Anchor path="/timeline">Like</Anchor>
                &nbsp;&nbsp;
                <Anchor path="/timeline">Comment</Anchor>
            </div>
        </>
    );
};

export default Post;
