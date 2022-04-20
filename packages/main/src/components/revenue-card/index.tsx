import { FC } from "react";
import { Card, ChartJSLineChart } from "@ht/components";
import clsx from "clsx";

interface IProps {
    title: string;
    desc: string;
    income: {
        amount: string;
        growth: string;
        status: "up" | "down";
    };
    lastMonthIncome: string;
    chartData: number[];
    className?: string;
}

const RevenueCard: FC<IProps> = ({
    title,
    desc,
    income,
    lastMonthIncome,
    chartData,
    className,
}) => {
    return (
        <Card className={clsx("p-[25px] w-full", className)}>
            <h6 className="text-xl mb-[3px]">{title}</h6>
            <p>{desc}</p>
            <h1 className="font-lato text-[40px] font-bold -tracking-wider flex items-center mb-[25px]">
                {income.amount}{" "}
                <span
                    className={clsx(
                        "text-success text-base font-normal ml-[10px] tracking-normal",
                        income.status === "up" && "text-success",
                        income.status === "down" && "text-danger"
                    )}
                >
                    {income.growth} {income.status}
                </span>
            </h1>
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
                />
            </div>
            <p className="mb-0 text-center">
                Last month:{" "}
                <span className="font-lato font-bold text-heading">
                    {lastMonthIncome}
                </span>
            </p>
        </Card>
    );
};

export default RevenueCard;
