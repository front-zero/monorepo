import { FC } from "react";
import { Card, Button } from "@ht/components";

interface IProps {
    title: string;
    description: string;
    path: string;
}

const IntroductionCard: FC<IProps> = ({ title, description, path }) => {
    return (
        <Card className="introduction-card text-center p-[25px] sm:pt-[46px] sm:pb-[47px] sm:px-[45px]">
            <h4 className="mb-4 leading-snug">{title}</h4>
            <p className="mb-8">{description}</p>
            <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 sm:gap-5">
                <Button path={path} shape="square" fullwidth>
                    Account Settings
                </Button>
                <Button path={path} color="success" shape="square" fullwidth>
                    Upgrade Account
                </Button>
            </div>
        </Card>
    );
};

export default IntroductionCard;
