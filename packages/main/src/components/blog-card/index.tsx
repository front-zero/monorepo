import { FC } from "react";
import clsx from "clsx";
import { Card, CardBody, Anchor } from "@ht/components";

interface IProps {
    image: {
        src: string;
        alt?: string;
    };
    title: string;
    path: string;
    category: string;
    excerpt: string;
    likes: number;
    comments: number;
    className?: string;
}

const BlogCard: FC<IProps> = ({
    className,
    image,
    title,
    path,
    category,
    excerpt,
    likes,
    comments,
}) => {
    return (
        <Card className={clsx("blog-card border-0", className)}>
            {image?.src && (
                <figure className="bg-gradient-mantle bg-repeat-x">
                    <img
                        src={image.src}
                        alt={image?.alt || title}
                        className="opacity-20 transition-opacity hover:opacity-50"
                    />
                </figure>
            )}

            <CardBody className="border border-geyser border-t-0">
                <p className="text-[11px] uppercase text-danger font-bold tracking-wider mb-[5px]">
                    {category}
                </p>
                <h5 className="font-normal leading-tight mb-3.7">
                    <Anchor path={path} className="text-heading">
                        {title}
                    </Anchor>
                </h5>
                <p className="mb-[25px]">{excerpt}</p>
                <p className="text-sm mb-0">
                    <Anchor path={path} className="ml-2 first:ml-0">
                        {likes} Likes
                    </Anchor>
                    <Anchor path={path} className="ml-2 first:ml-0">
                        {comments} Comments
                    </Anchor>
                    <Anchor path={path} className="ml-2 first:ml-0">
                        <i className="icon ion-more" />
                    </Anchor>
                </p>
            </CardBody>
        </Card>
    );
};

export default BlogCard;
