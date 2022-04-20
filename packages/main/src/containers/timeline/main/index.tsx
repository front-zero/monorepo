import { FC, Fragment } from "react";
import clsx from "clsx";
import {
    Card,
    Timeline02,
    Timeline02Item,
    Timeline02Time,
    Timeline02Date,
    Timeline02Body,
} from "@ht/components";
import Post from "../../../components/post";

// Demo Data
import posts from "@ht/shared/data/timeline/posts";

interface IProps {
    sidebarOpen?: boolean;
}

const Main: FC<IProps> = ({ sidebarOpen }) => {
    return (
        <div
            className={clsx(
                "transition-transform",
                sidebarOpen && "maxLg:translate-x-[305px]"
            )}
        >
            <Card className="p-4 sm:p-[30px]">
                <Timeline02>
                    {Object.entries(posts).map(([key, post]) => (
                        <Fragment key={key}>
                            <Timeline02Item key={key} isDay>
                                <Timeline02Time>&nbsp;</Timeline02Time>
                                <Timeline02Body>
                                    <Timeline02Date>Today</Timeline02Date>
                                </Timeline02Body>
                            </Timeline02Item>
                            {post.map((item) => (
                                <Timeline02Item key={item.id}>
                                    <Timeline02Time>{item.time}</Timeline02Time>
                                    <Timeline02Body>
                                        <Post
                                            title={item.title}
                                            path={item.path}
                                            author={item.author}
                                            excerpt={item.excerpt}
                                            images={item?.images}
                                        />
                                    </Timeline02Body>
                                </Timeline02Item>
                            ))}
                        </Fragment>
                    ))}
                </Timeline02>
            </Card>
        </div>
    );
};

Main.displayName = "Main";

export default Main;
