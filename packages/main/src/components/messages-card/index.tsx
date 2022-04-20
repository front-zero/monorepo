import { FC } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Button,
    ListGroup,
    ListGroupItem,
    Media,
    MediaLeft,
    MediaBody,
    Anchor,
} from "@ht/components";
import clsx from "clsx";

interface IProps {
    className?: string;
    title: string;
    messages: Array<{
        id: string | number;
        sender: {
            name: string;
            image: {
                src: string;
                alt?: string;
            };
        };
        time: string;
        message: string;
    }>;
}

const MessagesCard: FC<IProps> = ({ className, title, messages }) => (
    <Card className={clsx("card-info", className)}>
        <CardHeader className="flex justify-between items-center pl-5 pr-5 pt-3.8 pb-3">
            <CardTitle className="mb-0">{title}</CardTitle>
            <Button variant="texted" color="light">
                <i className="icon ion-more"></i>
            </Button>
        </CardHeader>
        <CardBody className="p-0">
            <ListGroup flush>
                {messages.map((msg) => (
                    <ListGroupItem key={msg.id} className="pl-5 pr-5 pt-3 pb-3">
                        <Media>
                            {msg.sender.image?.src && (
                                <MediaLeft className="w-[30px]">
                                    <img
                                        src={msg.sender.image.src}
                                        alt={
                                            msg.sender.image?.alt ||
                                            msg.sender.name
                                        }
                                        className="rounded-full"
                                    />
                                </MediaLeft>
                            )}

                            <MediaBody className="ml-2.5">
                                <h6 className="text-xs mb-0">
                                    {msg.sender.name}
                                </h6>
                                <p className="text-xs mb-0 text-gray-600">
                                    {msg.time}
                                </p>
                            </MediaBody>
                        </Media>
                        <p className="mb-0 mt-2.5 text-sm">{msg.message}</p>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </CardBody>
        <div className="border-t border-t-ghost px-5 py-3.8">
            <Anchor path="#!" className="text-xs">
                <i className="fa fa-angle-down mr-[5px]" /> Show all messages
            </Anchor>
        </div>
    </Card>
);

export default MessagesCard;
