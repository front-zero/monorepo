import { FC } from "react";
import clsx from "clsx";
import { ChartistLineChart, Anchor } from "@ht/components";

interface IProps {
    amount: number;
    suffix: string;
    title: string;
    description: string;
    path: string;
    chartData: number[][];
    className?: string;
}

const BitcoinEarnings: FC<IProps> = ({
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
                "bitcoin-earnings bg-white border border-geyser h-[400px] grid grid-rows-2 md:h-[500px]",
                className
            )}
        >
            <div className="h-[12.5rem] sm:h-full col-[1/1] row-[2/3] md:row-[1/-1]">
                <ChartistLineChart
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
                    grid={{ show: false }}
                    area={{
                        opacity: [0.2, 0.3],
                        colors: ["#1b84e7", "#6f42c1"],
                    }}
                    line={{ colors: ["#1b84e7", "#59339d"] }}
                    point={{ size: "6px" }}
                />
            </div>
            <div className="p-[1.563rem] sm:p-10 col-[1/1] row-[1/1]">
                <h1 className="font-lato font-normal mb-5 text-[3.5rem] sm:text-[4rem]">
                    {amount} <span className="text-2xl">{suffix}</span>
                </h1>
                <p className="uppercase font-bold tracking-wider text-heading mb-3.8">
                    {title}
                </p>
                <p className="lg:w-[70%] lg:mb-[1.875rem] mb-5">
                    {description}
                </p>
                <Anchor
                    path={path}
                    className="uppercase font-bold text-xs tracking-wider border border-primary px-[18px] py-3"
                >
                    View Statements <i className="fa fa-angle-right ml-1"></i>
                </Anchor>
            </div>
        </div>
    );
};

export default BitcoinEarnings;
