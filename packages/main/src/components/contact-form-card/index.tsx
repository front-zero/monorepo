import { FC } from "react";
import clsx from "clsx";
import { Card, CardTitle, Button, Input, Textarea } from "@ht/components";

interface IProps {
    className?: string;
    title: string;
}

const ContactFormCard: FC<IProps> = ({ className, title }) => {
    return (
        <Card className={clsx("contact-form-card p-5", className)}>
            <CardTitle className="mb-5">{title}</CardTitle>
            <div className="mb-4">
                <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                />
            </div>
            <div className="mb-4">
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                />
            </div>
            <div className="mb-4">
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                />
            </div>
            <Button type="submit" shape="square" fullwidth>
                Send Message
            </Button>
        </Card>
    );
};

export default ContactFormCard;
