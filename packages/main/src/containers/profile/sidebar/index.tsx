import ConnectionCard from "../../../components/connection-card";
import PeopleListCard from "../../../components/people-list-card";
import ContactCard from "../../../components/contact-card/layout-02";

// Demo data
import connectionsData from "@ht/shared/data/profile/connections";
import peopleViewed from "@ht/shared/data/profile/people-viewed";
import peopleMayKnow from "@ht/shared/data/profile/people-know";
import contactData from "@ht/shared/data/profile/contact";

const Sidebar = () => {
    return (
        <>
            <ConnectionCard connections={connectionsData} />
            <PeopleListCard
                className="mt-5"
                title={peopleViewed.title}
                people={peopleViewed.people}
            />
            <PeopleListCard
                className="mt-5"
                title={peopleMayKnow.title}
                people={peopleMayKnow.people}
            />
            <ContactCard
                title={contactData.title}
                contacts={contactData.contacts}
            />
        </>
    );
};

export default Sidebar;
