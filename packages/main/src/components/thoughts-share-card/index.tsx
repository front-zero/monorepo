import { FC } from "react";
import clsx from "clsx";
import { Card, CardTitle, Textarea, Button, Anchor } from "@ht/components";

interface IProps {
    className?: string;
    title: string;
}

const ThoughtsShareCard: FC<IProps> = ({ className, title }) => {
    return (
        <Card className={clsx("card-quick-post p-[25px]", className)}>
            <CardTitle className="mb-[25px]">{title}</CardTitle>
            <div className="form-group mb-5">
                <Textarea
                    id="quick-post"
                    name="quick-post"
                    placeholder="What's on your mind?"
                />
            </div>
            <div className="card-footer flex items-center justify-between">
                <Button color="purple" shape="square">
                    Share Post
                </Button>
                <nav>
                    <Anchor
                        path="#!"
                        className="text-2xl inline-block text-ghost hover:text-body focus:text-body"
                    >
                        <i className="icon ion-images"></i>
                    </Anchor>
                    <Anchor
                        path="#!"
                        className="text-2xl inline-block text-ghost ml-2 hover:text-body focus:text-body"
                    >
                        <i className="icon ion-aperture"></i>
                    </Anchor>
                    <Anchor
                        path="#!"
                        className="text-2xl inline-block text-ghost ml-2 hover:text-body focus:text-body"
                    >
                        <i className="icon ion-calendar"></i>
                    </Anchor>
                </nav>
            </div>
        </Card>
    );
};

export default ThoughtsShareCard;
