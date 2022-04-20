import { FC } from "react";
import clsx from "clsx";
import { Card, Anchor } from "@ht/components";

interface IProps {
    image: {
        src: string;
        alt?: string;
    };
    title: string;
    path: string;
    category: string;
    excerpt: string;
    posted_at: string;
    className?: string;
    layout?: 1 | 2;
}

const BlogSplitCard: FC<IProps> = ({
    className,
    image,
    title,
    path,
    category,
    excerpt,
    posted_at,
    layout,
}) => {
    return (
        <Card className={clsx("blog-split-card relative", className)}>
            <div
                className={clsx(
                    "flex flex-wrap",
                    layout === 2 && "flex-row-reverse"
                )}
            >
                <figure className="md:max-w-[41.66667%] lg:max-w-[50%] xl:max-w-[41.66667%]">
                    {image?.src && (
                        <img
                            src={image.src}
                            className="w-full h-full object-cover"
                            alt={image?.alt || title}
                        />
                    )}
                </figure>
                <div className="md:max-w-[58.33333%] lg:max-w-[50%] xl:max-w-[58.33333%] bg-white p-[25px] flex flex-col items-start">
                    <p className="text-sm uppercase font-medium tracking-wider text-success">
                        {category}
                    </p>
                    <h5 className="leading-snug mb-3.8">
                        <Anchor className="text-heading" path={path}>
                            {title}
                        </Anchor>
                    </h5>
                    <p className="mb-auto">{excerpt}</p>
                    <span className="block mt-5">{posted_at}</span>
                </div>
            </div>
        </Card>
    );
};

BlogSplitCard.defaultProps = {
    layout: 1,
};

export default BlogSplitCard;
