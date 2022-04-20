import { FC } from "react";
import { Card, CardBody, CardTitle, ChartJSBarChart } from "@ht/components";

interface IProps {
    title: string;
    impressionCount: string;
    growthRate: number;
    chartData: number[];
}

const ImpressionCard: FC<IProps> = ({
    title,
    impressionCount,
    growthRate,
    chartData,
}) => {
    return (
        <Card className="impression-card">
            <CardBody className="pb-0">
                <CardTitle className="text-info">{title}</CardTitle>
                <h2 className="font-lato">{impressionCount}</h2>
                <p className="text-xs">
                    <span className="text-info">{growthRate}%</span> change from
                    yesterday
                </p>
            </CardBody>
            <div className="h-[90px] sm:h-[105px] md:h-[72px] lg:h-[62px] xl:h-[72px] -mr-[1px]">
                <ChartJSBarChart
                    data={{
                        labels: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        datasets: [
                            {
                                data: chartData,
                                backgroundColor: "#5B93D3",
                                barPercentage: 1.2,
                            },
                        ],
                    }}
                    options={{
                        plugins: {
                            legend: {
                                display: false,
                            },
                        },
                        scales: {
                            y: {
                                display: false,
                                grid: {
                                    display: false,
                                },
                            },
                            x: {
                                display: false,
                                grid: {
                                    display: false,
                                },
                            },
                        },
                    }}
                    height={200}
                />
            </div>
        </Card>
    );
};

export default ImpressionCard;
