import { FC, useState, useEffect } from "react";
import clsx from "clsx";
import {
    Card,
    CardBody,
    CardTitle,
    Media,
    MediaBody,
    Anchor,
} from "@ht/components";

interface IProps {
    title: string;
    user: {
        image: {
            src: string;
            alt?: string;
        };
        name: string;
        path: string;
        designation: string;
        lastActivity?: string;
    };
    description: string[];
    className?: string;
}

const RecommendationCard: FC<IProps> = ({
    title,
    user: { image, name, path: userProfile, designation, lastActivity },
    description,
    className,
}) => {
    const [desc, setDesc] = useState<string[]>([]);
    const [hasMore, setHasMore] = useState(false);
    useEffect(() => {
        setHasMore(description.length > 2);
        setDesc(description.slice(0, 2));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const expandHandler = () => {
        if (hasMore) {
            setDesc(description);
            setHasMore(false);
        } else {
            setDesc(description.slice(0, 2));
            setHasMore(true);
        }
    };

    return (
        <Card className={clsx("recommendation-card", className)}>
            <CardBody className="p-[25px]">
                <CardTitle>{title}</CardTitle>
                <Media className="items-center my-[25px]">
                    {image?.src && (
                        <img
                            src={image.src}
                            alt={image?.alt || "Profile"}
                            className="w-10 rounded-full"
                            width={40}
                            height={40}
                        />
                    )}
                    <MediaBody className="ml-3.8">
                        <h6 className="mb-[2px]">
                            <Anchor path={userProfile}>{name}</Anchor>
                        </h6>
                        <p className="mb-0">{designation}</p>
                    </MediaBody>
                    {lastActivity && (
                        <span className="text-sm">2 hours ago</span>
                    )}
                </Media>
                {desc.map((d) => (
                    <p key={d} className="last:mb-0">
                        {d}
                    </p>
                ))}
            </CardBody>
            <div className="py-3 px-[25px] bg-gray-300 border-t border-t-ghost">
                <button
                    type="button"
                    className="text-primary"
                    onClick={expandHandler}
                >
                    {hasMore ? "More" : "Less"} recommendations (2){" "}
                    <i className="fa fa-angle-down"></i>
                </button>
            </div>
        </Card>
    );
};

export default RecommendationCard;
