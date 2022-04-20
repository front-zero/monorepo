import { FC } from "react";

const Label: FC = ({ children }) => {
    return (
        <h6 className="text-[11px] text-body uppercase border-b border-b-geyser bg-gray-200 px-[0.938rem] py-[0.438rem] mb-0">
            {children}
        </h6>
    );
};

export default Label;
