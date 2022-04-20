import { FC } from "react";
import clsx from "clsx";
import { Card, CardTitle, ChartJSDoughnutChart } from "@ht/components";
import { getPercentageValue } from "@ht/shared/methods";

interface IProps {
    title: string;
    data: Array<{
        label: string;
        value: number;
        color: string;
    }>;
    className?: string;
}

const MostVisitedCard: FC<IProps> = ({ title, data, className }) => {
    const totalData = data.reduce((acc, curr) => acc + curr.value, 0);
    const values: number[] = [];
    const colors: string[] = [];
    data.forEach((item) => {
        values.push(getPercentageValue(item.value, totalData));
        colors.push(item.color);
    });

    return (
        <Card className={clsx("most-visited-card p-5", className)}>
            <CardTitle className="mb-5">{title}</CardTitle>
            <div className="mb-[25px] min-w-[200px] min-h-[200px]">
                <ChartJSDoughnutChart
                    data={{
                        datasets: [
                            {
                                data: values,
                                backgroundColor: colors,
                                borderWidth: 0,
                            },
                        ],
                    }}
                    options={{
                        plugins: {
                            legend: {
                                display: false,
                            },
                            tooltip: {
                                enabled: false,
                            },
                        },
                    }}
                    width="100%"
                    height="100%"
                />
            </div>
            <div>
                {data.map((item) => (
                    <div
                        key={item.label}
                        className="flex items-center mt-[5px] first:mt-0"
                    >
                        <span
                            className="w-[10px] h-[10px] rounded-full"
                            style={{ background: item.color }}
                        />
                        <span className="ml-2.5">{item.label}</span>
                        <span className="ml-auto font-lato text-right">
                            {new Intl.NumberFormat().format(item.value)}
                        </span>
                    </div>
                ))}
            </div>
        </Card>
    );
};

export default MostVisitedCard;
