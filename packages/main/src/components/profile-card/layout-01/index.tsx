import { FC } from "react";
import { Card, Anchor, Button } from "@ht/components";
import clsx from "clsx";

interface IProps {
    className?: string;
    name: string;
    designation: string;
    bio: string;
    path: string;
    image: { src: string; alt?: string };
    socials: Array<{
        label: string;
        link: string;
        icon: string;
    }>;
}

const ProfileCard: FC<IProps> = ({
    className,
    name,
    designation,
    bio,
    path,
    image,
    socials,
}) => {
    return (
        <Card className={clsx("profile-card text-center p-[30px]", className)}>
            {image?.src && (
                <Anchor path={path} className="inline-block">
                    <img
                        src={image.src}
                        alt={image?.alt || name}
                        className="rounded-full w-[120px]"
                    />
                </Anchor>
            )}
            <h4 className="font-normal mt-5 mb-0.5">{name}</h4>
            <p className="mb-5">{designation}</p>
            <p className="mb-5">{bio}</p>
            <div className="text-[32px] mb-5 social-own-color">
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
            <Button fullwidth>Follow</Button>
        </Card>
    );
};

export default ProfileCard;
