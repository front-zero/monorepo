import { FC, useEffect } from "react";
import clsx from "clsx";
import { useSearchParams } from "react-router-dom";
import { Button } from "@ht/components";
import ContactCard from "../../../../components/contact-card/layout-01";
import { useContact } from "../../../../context/contact-context";

interface IProps {
    sidebarOpen?: boolean;
}

const Main: FC<IProps> = ({ sidebarOpen }) => {
    const [searchParams] = useSearchParams();

    const { contactList, hasMore, loadMoreContact, filterContact } =
        useContact();

    useEffect(() => {
        for (const entry of searchParams.entries()) {
            const [param, value] = entry;
            filterContact(param, value || "all");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    return (
        <div
            className={clsx(
                "xl:order-2 xl:col-[2/-1] transition-transform",
                sidebarOpen && "maxXl:translate-x-[270px]"
            )}
        >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {contactList?.map((contact) => (
                    <ContactCard
                        key={contact.id}
                        name={contact.name}
                        path={contact.path}
                        designation={contact.designation}
                        image={contact.avatar}
                        socials={contact.socials}
                        phone={contact.phone}
                        email={contact.email}
                        url={contact.url}
                    />
                ))}
            </div>
            {hasMore && (
                <Button
                    color="light"
                    fullwidth
                    className="mt-5"
                    onClick={loadMoreContact}
                >
                    Load more contacts
                </Button>
            )}
            {!hasMore && (
                <p className="mt-5 text-center text-heading">
                    No more item to show
                </p>
            )}
        </div>
    );
};

Main.displayName = "Main";

export default Main;
