import { FC } from "react";
import clsx from "clsx";
import Anchor from "../../../ui/anchor";

interface IProps {
    /**
     * Menu Label
     */
    label: string;
    /**
     * Menu Link
     */
    path: string;
    /**
     * Pass true if the item children is mega menu
     */
    isMegaMenu?: boolean;
}

const SubLink: FC<IProps> = ({ label, path, isMegaMenu }) => {
    return (
        <Anchor
            path={path}
            className={clsx(
                "block text-heading text-sm font-normal py-[0.375rem] hover:bg-gray-150 hover:text-primary",
                !isMegaMenu && "px-[0.625rem] mx-[0.625rem]",
                isMegaMenu && "px-[0.563rem] m-0"
            )}
        >
            {label}
        </Anchor>
    );
};

export default SubLink;
