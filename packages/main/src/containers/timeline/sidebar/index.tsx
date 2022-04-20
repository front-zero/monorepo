import { FC } from "react";
import clsx from "clsx";
import CalendarCard from "../../../components/calendar-card";
import LatestUpdateCard from "../../../components/latest-post-card";

// Demo Data
import recentPosts from "@ht/shared/data/timeline/recent-posts";

interface IProps {
    sidebarOpen?: boolean;
}

const Sidebar: FC<IProps> = ({ sidebarOpen }) => {
    return (
        <div
            className={clsx(
                "maxLg:absolute maxLg:w-72 maxLg:top-0 transition-transform",
                !sidebarOpen &&
                    "maxLg:opacity-0 maxLg:invisible maxLg:-translate-x-72",
                sidebarOpen &&
                    "maxLg:opacity-1 maxLg:visible maxLg:translate-x-0"
            )}
        >
            <CalendarCard />
            <LatestUpdateCard title="My Latest Updates" posts={recentPosts} />
        </div>
    );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
