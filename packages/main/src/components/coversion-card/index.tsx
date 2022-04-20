import { FC } from "react";
import clsx from "clsx";
import { IConversion } from "@ht/shared/types";

interface IProps extends Omit<IConversion, "id"> {
    className?: string;
}

const Conversion: FC<IProps> = ({
    icon,
    title,
    number,
    className,
    titleClass,
}) => {
    return (
        <div
            className={clsx(
                "conversion p-5 flex items-center border-geyser",
                className
            )}
        >
            <i className={clsx("ext-gray-600 text-7xl", icon)}></i>
            <div className="ml-3.8">
                <p
                    className={clsx(
                        "uppercase text-xs tracking-wider font-bold mb-[2px]",
                        titleClass
                    )}
                >
                    {title}
                </p>
                <h2 className="font-bold font-lato mb-0">
                    {new Intl.NumberFormat().format(number)}
                </h2>
            </div>
        </div>
    );
};

export default Conversion;
