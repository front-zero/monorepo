import { FC } from "react";
import { Card, CardBody, CardTitle, ChartJSLineChart } from "@ht/components";

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
                <CardTitle className="text-purple">{title}</CardTitle>
                <h2 className="font-lato">{impressionCount}</h2>
                <p className="text-xs">
                    <span className="text-purple">{growthRate}%</span> change
                    from yesterday
                </p>
            </CardBody>
            <div className="h-[90px] sm:h-[105px] md:h-[72px] lg:h-[62px] xl:h-[72px] -mr-[1px]">
                <ChartJSLineChart
                    data={{
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        datasets: [
                            {
                                data: chartData,
                                backgroundColor: "#6F42C5",
                                fill: true,
                                borderWidth: 0,
                                borderColor: "#fff",
                                tension: 0,
                                pointRadius: 0,
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
