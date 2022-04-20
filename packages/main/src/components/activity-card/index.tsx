import { FC, useState } from "react";
import {
    Card,
    CardBody,
    CardTitle,
    Media,
    MediaBody,
    Anchor,
} from "@ht/components";
import ShareModal from "../modals/share-modal";
import CommentModal from "../modals/comment-modal";

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
        lastActivity: string;
    };
    activity: {
        image: {
            src: string;
            alt?: string;
        };
        title: string;
        path: string;
        excerpt: string;
    };
    author?: {
        name: string;
        path: string;
        designation: string;
    };
}

const ActivityCard: FC<IProps> = ({ title, user, activity, author }) => {
    const [likes, setLikes] = useState(0);
    const [showShareModal, setShowShareModal] = useState(false);
    const [showCommentModal, setShowCommentModal] = useState(false);
    return (
        <>
            <Card className="activity-card mt-5">
                <CardBody className="p-[25px]">
                    <CardTitle>{title}</CardTitle>
                    <Media className="items-center my-[25px]">
                        {user?.image?.src && (
                            <img
                                src={user.image.src}
                                alt={user.image?.alt || "author"}
                                className="rounded-full w-10"
                                width={40}
                                height={40}
                            />
                        )}

                        <MediaBody className="ml-3.8">
                            <h6 className="mb-[2px]">
                                <Anchor path={user.path}>{user.name}</Anchor>
                            </h6>
                            <p className="mb-0">{user.designation}</p>
                        </MediaBody>
                        <span className="text-sm">{user.lastActivity}</span>
                    </Media>
                    <div className="grid md:grid-cols-12">
                        {activity?.image?.src && (
                            <div className="md:col-span-4">
                                <Anchor path="#!">
                                    <img
                                        src={activity.image.src}
                                        className="w-full h-full object-cover"
                                        alt={activity.image?.alt || "Banner"}
                                        width={227}
                                        height={303}
                                    />
                                </Anchor>
                            </div>
                        )}

                        <div className="md:col-span-8">
                            <div className="bg-gray-200 p-[25px]">
                                <Anchor
                                    path={activity.path}
                                    className="block text-2xl text-heading mb-5 leading-snug"
                                >
                                    {activity.title}
                                </Anchor>
                                <p>{activity.excerpt}</p>
                                {author && (
                                    <p className="mb-0">
                                        <Anchor
                                            path={author.path}
                                            className="block"
                                        >
                                            {author.name}
                                        </Anchor>
                                        <span className="block">
                                            {author.designation}
                                        </span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </CardBody>
                <div className="p-0 bg-black/5 border-t border-t-geyser card-footer relative">
                    <button
                        onClick={() => setShowCommentModal(true)}
                        className="inline-block border-r border-r-geyser py-3 px-3.8 md:px-[25px] text-primary"
                    >
                        Comment
                    </button>
                    <button
                        className="inline-block border-r border-r-geyser py-3 px-3.8 md:px-[25px] text-primary"
                        onClick={() => setLikes((prev) => prev + 1)}
                    >
                        Likes ({likes})
                    </button>
                    <button
                        onClick={() => setShowShareModal(true)}
                        className="inline-block border-r border-r-geyser py-3 px-3.8 md:px-[25px] text-primary"
                    >
                        Share
                    </button>
                </div>
            </Card>
            <ShareModal
                show={showShareModal}
                onClose={() => setShowShareModal(false)}
            />
            <CommentModal
                show={showCommentModal}
                onClose={() => setShowCommentModal(false)}
            />
        </>
    );
};

export default ActivityCard;
