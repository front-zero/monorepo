import { FC } from "react";
import clsx from "clsx";
import { Anchor } from "@ht/components";
import dayjs, { Dayjs } from "dayjs";

interface IProps {
    title: string;
    path: string;
    type: "video" | "image" | "sound" | "document";
    size: string;
    createdAt: Dayjs;
}

const FileItem: FC<IProps> = ({ title, path, type, size, createdAt }) => {
    return (
        <div className="file-item flex items-center justify-start p-3.8 bg-white border border-ghost sm:h-[60px] sm:py-0 sm:px-[25px] -mt-px first:mt-0">
            <div className="grid grid-cols-12 w-full">
                <div className="col-span-9 sm:col-span-5 flex items-center">
                    <i
                        className={clsx(
                            "fa",
                            type === "image" && "fa-file-image-o text-primary",
                            type === "document" && "fa-file-pdf-o text-danger",
                            type === "video" && "fa-file-video-o text-success",
                            type === "sound" && "fa-file-sound-o text-warning"
                        )}
                    />
                    <Anchor path={path} className="ml-[10px] text-heading">
                        {title}
                    </Anchor>
                </div>
                <div className="col-span-3 sm:col-span-2 text-right sm:text-left">
                    {size}
                </div>
                <div className="col-span-6 sm:col-span-4 mt-[5px] sm:mt-0">
                    {dayjs(createdAt).format("MMM DD, YYYY")}
                </div>
                <div className="col-span-6 sm:col-span-1 text-right mt-[5px] sm:mt-0">
                    <Anchor path={path} className="text-heading">
                        <i className="icon ion-more" />
                    </Anchor>
                </div>
            </div>
        </div>
    );
};

export default FileItem;
