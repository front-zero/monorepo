import { FC } from "react";
import { Media, MediaBody } from "@ht/components";
import clsx from "clsx";

interface IProps {
    icon: string;
    title: string;
    links?: string[];
    texts?: string[];
}

const ContactCard: FC<IProps> = ({ icon, title, links, texts }) => {
    return (
        <Media className="mt-[25px]">
            <div>
                <i className={clsx("icon text-xl leading-none", icon)} />
            </div>
            <MediaBody className="ml-3.8 mt-[2px]">
                <h6 className="text-gray-750">{title}</h6>
                {links?.map((link) => (
                    <a
                        key={link}
                        href={link}
                        target="_blank"
                        className="block"
                        rel="noreferrer"
                    >
                        {link}
                    </a>
                ))}
                {texts?.map((text) => (
                    <span key={text} className="block">
                        {text}
                    </span>
                ))}
            </MediaBody>
        </Media>
    );
};

export default ContactCard;
