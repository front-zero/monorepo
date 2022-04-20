import { FC } from "react";
import clsx from "clsx";

interface IProps {
    time: string;
    desc: string;
    status?: "success" | "warning" | "danger";
}

const DropddownItem: FC<IProps> = ({ time, desc, status }) => {
    return (
        <div className="px-[0.938rem] py-[0.625rem] border-b border-b-geyser flex flex-wrap">
            <p className="text-right w-1/6">{time}</p>
            <div className="text-center w-1/6">
                <span
                    className={clsx(
                        "inline-block w-[10px] h-[10px] rounded-full",
                        status === "success" && "bg-success",
                        status === "warning" && "bg-warning",
                        status === "danger" && "bg-danger"
                    )}
                />
            </div>
            <p
                className="text-trout text-sm w-4/6"
                dangerouslySetInnerHTML={{ __html: desc }}
            />
        </div>
    );
};

DropddownItem.defaultProps = {
    status: "success",
};

export default DropddownItem;
