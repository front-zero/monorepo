import { FC } from "react";
import { Card, CardBody, CardTitle, ChartJSLineChart } from "@ht/components";

interface IProps {
    title: string;
    impressionCount: number;
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
        <Card>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <h1 className="font-lato text-primary">
                    {new Intl.NumberFormat().format(impressionCount)}
                </h1>
                <p className="text-xs mb-0">
                    <span className="text-primary">{growthRate}%</span> change
                    from yesterday
                </p>
            </CardBody>
            <div className="h-[50px] sm:h-[70px] w-full relative">
                <ChartJSLineChart
                    data={{
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        datasets: [
                            {
                                data: chartData,
                                borderColor: "#1B84E7",
                                borderWidth: 2,
                                tension: 0.3,
                                pointRadius: 0,
                            },
                        ],
                    }}
                    options={{
                        maintainAspectRatio: false,
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
                    width="100%"
                    height="100%"
                />
            </div>
        </Card>
    );
};

export default ImpressionCard;
