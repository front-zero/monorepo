import { useState, useEffect } from "react";
import clsx from "clsx";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ScrollBar } from "@ht/components";
import PageHeader from "../../../../components/page-header/layout-02";
import UserList from "../../../../components/apps/messages/user-list";
import { useChat } from "../../../../context/chat-context";

const Sidebar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const { bodyOpen, setBodyOpen, friends, fetchMoreFriends, hasMoreFriends } =
        useChat();
    const [scrollInitialView, setScrollInitialView] = useState<
        "top" | "bottom"
    >("top");
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params?.chatId) return;
        if (!friends) return;
        navigate(`/apps/messages/${friends[0].id}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [friends]);

    return (
        <div
            className={clsx(
                "sidebar h-[calc(100vh_-_135px)] lg:h-[calc(100vh_-_192px)] maxLg:absolute maxLg:w-full maxLg:transition-transform",
                !bodyOpen && "maxLg:visible maxLg:translate-x-0",
                bodyOpen &&
                    "maxLg:invisible maxLg:translate-x-[calc(-100%_-_100px)]"
            )}
        >
            <div className="flex justify-between items-center mb-4 px-3.8 md:px-0">
                <PageHeader title="Messages" />
            </div>
            <ScrollBar
                bottom="112px"
                className="border-y border-y-ghost"
                initialView={scrollInitialView}
                isPositionChange={isScroll}
            >
                {friends ? (
                    <UserList users={friends} setBodyOpen={setBodyOpen} />
                ) : (
                    <div>Loading...</div>
                )}
            </ScrollBar>
            <div className="md:mt-[25px]">
                <Button
                    fullwidth
                    color="royal"
                    className="font-medium uppercase tracking-wider text-[11px] leading-relaxed"
                    disabled={!hasMoreFriends}
                    onClick={() => {
                        fetchMoreFriends();
                        setScrollInitialView("bottom");
                        setIsScroll((prev) => !prev);
                    }}
                >
                    Load More
                </Button>
            </div>
        </div>
    );
};

export default Sidebar;
