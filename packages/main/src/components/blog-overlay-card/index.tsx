import { FC } from "react";
import clsx from "clsx";
import { Card, Anchor, CardFooter, CardImageOverlay } from "@ht/components";

interface IProps {
    image: {
        src: string;
        alt?: string;
    };
    title: string;
    path: string;
    category: string;
    posted_at: string;
    likes: number;
    comments: number;
    author: {
        name: string;
        path: string;
    };
    className?: string;
}

const BlogOverlayCard: FC<IProps> = ({
    className,
    image,
    title,
    path,
    category,
    posted_at,
    likes,
    comments,
    author,
}) => {
    return (
        <Card className={clsx("blog-overlay-card grid border-0", className)}>
            {image?.src && (
                <img
                    className="img-fit-cover col-[1/-1] row-[1/-1]"
                    src={image.src}
                    alt={image?.alt || title}
                />
            )}

            <CardImageOverlay className="grid">
                <div className="mt-auto mx-auto text-center w-4/5">
                    <p className="uppercase text-xs font-medium tracking-wider text-primary">
                        {category}
                    </p>
                    <h3 className="font-light leading-normal maxLg:text-lg">
                        <Anchor className="text-white/75" path={path}>
                            {title}
                        </Anchor>
                    </h3>
                </div>
                <CardFooter className="mt-auto bg-transparent text-white/80 border-t-white/10 flex flex-wrap sm:justify-between items-center">
                    <span className="mr-[5px]">{posted_at}</span>
                    <Anchor
                        path={path}
                        className="text-white/80 hover:text-white mr-2.5"
                    >
                        <i className="fa fa-heart-o mr-[5px]"></i> {likes} Likes
                    </Anchor>
                    <Anchor
                        path={path}
                        className="text-white/80 hover:text-white"
                    >
                        <i className="fa fa-comment-o mr-[5px]"></i> {comments}{" "}
                        Comments
                    </Anchor>
                    <span>
                        By:{" "}
                        <Anchor
                            path={author.path}
                            className="text-white/80 hover:text-white"
                        >
                            {author.name}
                        </Anchor>
                    </span>
                </CardFooter>
            </CardImageOverlay>
        </Card>
    );
};

export default BlogOverlayCard;
