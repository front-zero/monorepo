import { FC } from "react";
import { Card, CardTitle, Timeline03, Timeline03Item } from "@ht/components";
import Item from "./item";
import { IPost } from "@ht/shared/types";

interface IProps {
    title: string;
    posts: IPost[];
}

const LatestUpdateCard: FC<IProps> = ({ title, posts }) => {
    return (
        <Card className="latest-update-card p-5 mt-5">
            <CardTitle className="mb-3.8">{title}</CardTitle>
            <Timeline03>
                {posts.map((post) => (
                    <Timeline03Item key={post.id}>
                        <Item
                            title={post.title}
                            path={post.path}
                            date={post.postedAt}
                            author={{
                                name: post.author.name,
                                path: post.author.path,
                                location: post.author?.location,
                            }}
                            excerpt={post.excerpt}
                            image={post.image}
                        />
                    </Timeline03Item>
                ))}
            </Timeline03>
        </Card>
    );
};

export default LatestUpdateCard;
