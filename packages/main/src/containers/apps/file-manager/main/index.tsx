import { FC, useEffect } from "react";
import clsx from "clsx";
import { useSearchParams } from "react-router-dom";
import { Button, SectionLabel } from "@ht/components";
import { filesFormat } from "@ht/shared/methods";
import { useFile } from "../../../../context/file-context";
import FileGroup from "./file-group";

interface IProps {
    sidebarOpen?: boolean;
}

const Main: FC<IProps> = ({ sidebarOpen }) => {
    const [searchParams] = useSearchParams();

    const { fileList, hasMore, loadMoreFile, filterFile } = useFile();

    useEffect(() => {
        for (const entry of searchParams.entries()) {
            const [param, value] = entry;
            filterFile(param, value || "all");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]);

    const files = filesFormat(fileList || []);

    return (
        <div
            className={clsx(
                "xl:order-2 xl:col-[2/-1] transition-transform",
                sidebarOpen && "maxXl:translate-x-[270px]"
            )}
        >
            {Object.entries(files).map(([key, value]) => (
                <div key={key} className="mt-[25px] first:mt-0">
                    <SectionLabel size="md" className="!text-secondary">
                        {key}
                    </SectionLabel>
                    <FileGroup files={value} />
                </div>
            ))}

            {/* <SectionLabel size="md" className="!text-secondary ">
                Today
            </SectionLabel> */}
            {hasMore && (
                <Button
                    color="light"
                    fullwidth
                    className="mt-5"
                    onClick={loadMoreFile}
                >
                    Load more files
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
