import { FC } from "react";
import clsx from "clsx";
import { Button, SectionLabel } from "@ht/components";
import { getUniqueArrayWithCount } from "@ht/shared/methods";
import { useContact } from "../../../../context/contact-context";
import SidebarNav from "../../../../components/sidebar-nav";

interface IProps {
    sidebarOpen?: boolean;
}

const Sidebar: FC<IProps> = ({ sidebarOpen }) => {
    const { allContacts } = useContact();
    const allGroups = allContacts.map((con) => con.group);
    const allLocation = allContacts.map((con) => con.location);
    const allDesignations = allContacts.map((con) => con.designation);
    const groups = getUniqueArrayWithCount(allGroups);
    const locations = getUniqueArrayWithCount(allLocation);
    const designations = getUniqueArrayWithCount(allDesignations);

    return (
        <div
            className={clsx(
                "xl:order-1 xl:col-span-1 maxXl:absolute maxXl:w-60 transition-transform",
                !sidebarOpen &&
                    "maxXl:opacity-0 maxXl:invisible maxXl:-translate-x-72",
                sidebarOpen &&
                    "maxXl:opacity-1 maxXl:visible maxXl:translate-x-0"
            )}
        >
            <Button className="mb-5" fullwidth>
                Add New
            </Button>
            <SidebarNav
                type="group"
                items={[
                    {
                        title: "All Contacts",
                        slug: "all",
                        count: allContacts.length,
                    },
                    ...groups,
                ]}
            />
            <SectionLabel className="mt-[25px] text-pale">
                Location
            </SectionLabel>
            <SidebarNav type="location" items={locations} />
            <SectionLabel className="mt-[25px] text-pale">
                Job Position
            </SectionLabel>
            <SidebarNav type="designation" items={designations} />
        </div>
    );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
