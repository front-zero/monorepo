import { FC } from "react";
import clsx from "clsx";
import { Breadcrumb, BreadcrumbItem } from "@ht/components";

interface IProps {
    /**
     * Pass previous page's text and link
     */
    prev: Array<{
        text: string;
        path: string;
    }>;
    /**
     * Write current page's title
     */
    currentPage: string;
    /**
     * Write page's title
     */
    title?: string;
    /**
     * Pass the breadcrumb. Default is 1
     */
    variant?: 1 | 2 | 3;
}

const PageHeader: FC<IProps> = ({ prev, currentPage, title, variant }) => {
    return (
        <div
            className={clsx(
                "pageheader py-[0.938rem]",
                variant === 1 &&
                    "sm:py-[1.563rem] sm:flex sm:items-center sm:justify-between sm:flex-row-reverse",
                variant === 2 &&
                    "xl:py-[1.563rem] xl:flex xl:items-center xl:justify-between xl:flex-row-reverse",
                variant === 3 &&
                    "lg:py-[1.563rem] lg:flex lg:items-center lg:justify-between lg:flex-row-reverse"
            )}
        >
            <Breadcrumb className="bg-transparent text-xs px-0 py-0 sm:text-base">
                {prev?.map((item) => (
                    <BreadcrumbItem key={item.text} path={item.path}>
                        {item.text}
                    </BreadcrumbItem>
                ))}
                <BreadcrumbItem active>{currentPage}</BreadcrumbItem>
            </Breadcrumb>
            {title && (
                <h6
                    className={clsx(
                        "pagetitle mt-[0.938rem] mb-[0.625rem] pl-[0.625rem] border-l-4 border-l-primary-400 uppercase font-bold text-lg tracking-wide leading-none",
                        variant === 1 && "sm:my-0",
                        variant === 2 && "xl:my-0",
                        variant === 3 && "lg:my-0"
                    )}
                >
                    {title}
                </h6>
            )}
        </div>
    );
};

PageHeader.defaultProps = {
    variant: 1,
};

export default PageHeader;
