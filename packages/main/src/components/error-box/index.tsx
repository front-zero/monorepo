import { FC } from "react";
import { Button } from "@ht/components";

interface IProps {
    title: string;
    subtitle: string;
    description: string;
}

const ErrorBox: FC<IProps> = ({ title, subtitle, description }) => {
    return (
        <div className="text-center">
            <h1 className="text-[100px] font-bold leading-[0.7] border-b-2 border-b-gray-600 sm:text-[130px]">
                {title}
            </h1>
            <h5 className="sm:text-2xl font-normal text-body">{subtitle}.</h5>
            <p className="mb-[50px]">{description}</p>
            <p className="mb-[50px]">
                <Button
                    path="/"
                    variant="outlined"
                    className="px-[25px] uppercase border-2 tracking-wider"
                >
                    Back to Home
                </Button>
            </p>
            <p className="mb-0 text-xs text-gray-600">
                &copy; Copyright {new Date().getFullYear()}. All Rights
                Reserved. Stor React Admin Dashboard Template.
            </p>
        </div>
    );
};

export default ErrorBox;
