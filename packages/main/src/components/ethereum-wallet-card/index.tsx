import { FC } from "react";
import clsx from "clsx";
import { ChartistBarChart, Anchor } from "@ht/components";

interface IProps {
    amount: number;
    suffix: string;
    title: string;
    description: string;
    path: string;
    chartData: number[][];
    className?: string;
}

const EthereumWallet: FC<IProps> = ({
    className,
    title,
    description,
    path,
    chartData,
    amount,
    suffix,
}) => {
    return (
        <div
            className={clsx(
                "ethereum-wallet grid grid-cols-2 grid-rows-1 sm:items-center bg-white border border-ghost h-[21.875rem] sm:h-[18.75rem] lg:h-[238px]",
                className
            )}
        >
            <div className="col-[1/2] maxSm:col-[1/-1] h-full pt-8">
                <ChartistBarChart
                    data={{
                        series: chartData,
                    }}
                    options={{
                        high: 30,
                        low: 0,
                        axisY: {
                            onlyInteger: true,
                            offset: 0,
                        },
                        axisX: {
                            offset: 0,
                        },
                        showArea: true,
                        fullWidth: true,
                        chartPadding: {
                            bottom: 0,
                            left: 0,
                            right: 0,
                            top: 0,
                        },
                    }}
                    bar={{
                        colors: ["#8AC6E8", "#1B84E7"],
                        width: "16px",
                    }}
                    grid={{
                        show: false,
                    }}
                    label={{ show: false }}
                />
            </div>
            <div className="col-[1/-1] row-[1] p-[1.563rem] sm:col-[2/3] sm:pr-5 sm:pt-[2.688rem]">
                <h4 className="text-[2rem] font-bold font-lato">
                    {amount} <span className="text-xl">{suffix}</span>
                </h4>
                <p className="uppercase font-bold tracking-wider text-heading mb-[0.625rem]">
                    {title}
                </p>
                <p className="text-sm">{description}</p>
                <Anchor
                    path={path}
                    className="uppercase font-bold text-xs tracking-wider"
                >
                    View Report{" "}
                    <i className="fa fa-angle-right ml-[0.313rem]"></i>
                </Anchor>
            </div>
        </div>
    );
};

export default EthereumWallet;
