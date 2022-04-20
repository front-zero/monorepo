import { FC } from "react";
import { Card, CardBody, CardTitle, ChartistLineChart } from "@ht/components";
import clsx from "clsx";

interface IProps {
    title: string;
    impressionCount: string;
    growthRate: number;
    chartData: number[];
    className?: string;
}

const ImpressionCard: FC<IProps> = ({
    title,
    impressionCount,
    growthRate,
    chartData,
    className,
}) => {
    return (
        <Card className={clsx("impression-card", className)}>
            <CardBody className="pb-0">
                <CardTitle className="text-primary">{title}</CardTitle>
                <h2 className="font-lato">{impressionCount}</h2>
                <p className="text-xs">
                    <span className="text-primary">{growthRate}%</span> change
                    from yesterday
                </p>
            </CardBody>
            <div className="h-[90px] sm:h-[105px] md:h-[72px] lg:h-[62px] xl:h-[72px] -mr-[1px]">
                <ChartistLineChart
                    data={{
                        series: [chartData],
                    }}
                    options={{
                        high: 30,
                        low: 0,
                        axisY: {
                            offset: 0,
                        },
                        axisX: {
                            offset: 0,
                        },
                        showPoint: false,
                        fullWidth: true,
                        chartPadding: {
                            bottom: 0,
                            left: 0,
                            right: 0,
                            top: 0,
                        },
                    }}
                    line={{
                        width: "2px",
                        colors: ["#0083CD"],
                    }}
                    grid={{ show: false }}
                    label={{ show: false }}
                />
            </div>
        </Card>
    );
};

export default ImpressionCard;
