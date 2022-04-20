import { FC } from "react";
import clsx from "clsx";
import { Button } from "@ht/components";
import { getUniqueArrayWithCount } from "@ht/shared/methods";
import { useFile } from "../../../../context/file-context";
import SidebarNav from "../../../../components/sidebar-nav";

interface IProps {
    sidebarOpen?: boolean;
}

const Sidebar: FC<IProps> = ({ sidebarOpen }) => {
    const { allFiles } = useFile();
    const allTypes = allFiles.map((file) => file.type);
    const types = getUniqueArrayWithCount(allTypes);
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
                Upload File
            </Button>
            <SidebarNav
                type="type"
                items={[
                    {
                        title: "All Contacts",
                        slug: "all",
                        count: allFiles.length,
                    },
                    ...types,
                ]}
            />
        </div>
    );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
