import { FC } from "react";
import { ChartJSDoughnutChart } from "@ht/components";

interface IProps {
    amount: number;
    title: string;
    description: string;
    detailsPath?: string;
    settingsPath?: string;
    chartData: number[];
}

const Overview: FC<IProps> = ({
    amount,
    title,
    description,
    detailsPath,
    settingsPath,
    chartData,
}) => {
    return (
        <div className="overview grid grid-cols-12 gap-5 md:gap-[30px] items-center">
            <div className="col-span-12 md:col-span-5">
                <h1 className="font-lato font-bold text-[56px]">
                    {new Intl.NumberFormat().format(amount)}
                </h1>
                <h6 className="font-[15px] font-bold mb-5">{title}</h6>
                <p>{description}</p>
                <p className="text-xs">
                    {detailsPath && (
                        <a
                            href={detailsPath}
                            className="inline-block text-body"
                        >
                            View Details
                        </a>
                    )}
                    {settingsPath && (
                        <a
                            href={settingsPath}
                            className="inline-block text-body ml-3.8"
                        >
                            Edit Settings
                        </a>
                    )}
                </p>
            </div>
            <div className="col-span-12 md:col-span-7">
                <div className="h-[380px]">
                    <ChartJSDoughnutChart
                        data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                            datasets: [
                                {
                                    label: "# of Votes",
                                    data: chartData,
                                    backgroundColor: [
                                        "#29B0D0",
                                        "#4C6579",
                                        "#F57E2E",
                                        "#C8E0E4",
                                        "#A6A7AC",
                                    ],
                                    borderColor: "#fff",
                                    borderWidth: 2,
                                },
                            ],
                        }}
                        options={{
                            plugins: {
                                legend: {
                                    display: true,
                                    position: "left",
                                },
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Overview;
