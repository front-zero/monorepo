import { FC } from "react";
import clsx from "clsx";

interface IProps {
    /**
     * Write page's title
     */
    title?: string;
}

const PageHeader: FC<IProps> = ({ title }) => {
    return (
        <div className={clsx("pageheader")}>
            {title && (
                <h6
                    className={clsx(
                        "pagetitle mb-0 pl-2.5 border-l-4 border-l-primary-400 uppercase font-bold text-lg tracking-wide leading-none"
                    )}
                >
                    {title}
                </h6>
            )}
        </div>
    );
};

export default PageHeader;
