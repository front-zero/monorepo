import { FC } from "react";
import clsx from "clsx";
import { Card, CardTitle, Anchor } from "@ht/components";

interface IProps {
    className?: string;
    title: string;
    description?: string;
    socials: Array<{
        label: string;
        link: string;
        icon: string;
    }>;
}

const ConnectedCard: FC<IProps> = ({
    className,
    title,
    description,
    socials,
}) => {
    return (
        <Card className={clsx("connected-card p-[25px]", className)}>
            <CardTitle>{title}</CardTitle>
            {description && <p>{description}</p>}
            <div className="text-xl social-own-color">
                {socials.map(({ label, link, icon }) => (
                    <Anchor
                        key={link}
                        label={label}
                        path={link}
                        className="mr-2"
                    >
                        <i className={icon} />
                    </Anchor>
                ))}
            </div>
        </Card>
    );
};

export default ConnectedCard;
