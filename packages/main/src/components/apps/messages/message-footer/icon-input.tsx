import { FC } from "react";
import clsx from "clsx";

interface IProps {
    id: string;
    name: string;
    type: string;
    icon: string;
    size?: "sm" | "lg";
}

const IconInput: FC<IProps> = ({ id, name, type, icon, size }) => {
    return (
        <label
            className={clsx(
                "text-pale ml-3.5 cursor-pointer text-2xl",
                size === "sm" && "text-[21px]",
                size === "lg" && "text-2xl"
            )}
        >
            <i className={icon} />
            <input
                id={id}
                name={name}
                type={type}
                placeholder="Type something here..."
                className="sr-only"
            />
        </label>
    );
};

IconInput.defaultProps = {
    size: "lg",
};

export default IconInput;
