import { FC } from "react";
import { Card } from "@ht/components";

interface IProps {
    title: string;
    earning: string;
    earning_based: string;
}

const EarningMoneyCard: FC<IProps> = ({ title, earning, earning_based }) => {
    return (
        <Card className="earning-money-card p-[25px] last:border-l-0">
            <h6 className="uppercase text-[11px] tracking-wider mb-[5px]">
                {title}
            </h6>
            <h1 className="font-lato font-bold text-2xl mb-[3px] sm:text-h1">
                {earning}
            </h1>
            <span className="text-xs text-gray-600">{earning_based}</span>
        </Card>
    );
};

export default EarningMoneyCard;
