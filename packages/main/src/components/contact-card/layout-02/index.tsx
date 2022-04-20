import { FC } from "react";
import { Card, CardTitle } from "@ht/components";
import Contact from "./contact";

interface IProps {
    title: string;
    contacts: Array<{
        icon: string;
        title: string;
        links?: string[];
        texts?: string[];
    }>;
}

const ContactCard: FC<IProps> = ({ title, contacts }) => {
    return (
        <Card className="contact-card p-[25px] mt-5">
            <CardTitle>{title} </CardTitle>
            {contacts.map((contact) => (
                <Contact
                    key={contact.title}
                    icon={contact.icon}
                    title={contact.title}
                    links={contact.links}
                    texts={contact.texts}
                />
            ))}
        </Card>
    );
};

export default ContactCard;
