import { FC } from "react";
import clsx from "clsx";
import { Card, Anchor } from "@ht/components";

interface IProps {
    className?: string;
    image: {
        src: string;
        alt?: string;
    };
    name: string;
    path: string;
    designation: string;
    socials: Array<{
        label: string;
        icon: string;
        link: string;
    }>;
    phone: string;
    email: string;
    url: string;
}

const ContactCard: FC<IProps> = ({
    className,
    image,
    name,
    path,
    designation,
    socials,
    phone,
    email,
    url,
}) => {
    return (
        <Card className={clsx("contact-card p-[25px]", className)}>
            <div className="text-center">
                {image?.src && (
                    <Anchor path={path} className="inline-block m-auto">
                        <img
                            src={image.src}
                            alt={image?.alt || "Contact"}
                            className="w-[120px] h-[120px] rounded-full p-[5px] border-2 border-primary bg-white transition-shadow hover:shadow-md hover:shadow-primary/30"
                        />
                    </Anchor>
                )}

                <h5 className="mt-[10px] mb-[5px]">
                    <Anchor path={path} className="text-heading">
                        {name}
                    </Anchor>
                </h5>
                <p>{designation}</p>
                <p className="text-lg">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.link}
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2"
                        >
                            <i className={social.icon}></i>
                        </a>
                    ))}
                </p>
                <p className="flex items-center justify-between mb-0 py-2 border-t border-t-geyser text-sm">
                    <span>Phone:</span>
                    <span>{phone}</span>
                </p>
                <p className="flex items-center justify-between mb-0 py-2 border-t border-t-geyser text-sm">
                    <span>Email:</span>
                    <a href={`mailto:${email}`}>{email}</a>
                </p>
                <p className="flex items-center justify-between mb-0 py-2 border-t border-t-geyser text-sm">
                    <span>URL:</span>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {url}
                    </a>
                </p>
            </div>
        </Card>
    );
};

export default ContactCard;
