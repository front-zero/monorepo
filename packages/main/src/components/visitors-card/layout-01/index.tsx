import { FC } from "react";
import clsx from "clsx";
import { ChartistLineChart } from "@ht/components";
import { IVisit } from "@ht/shared/types";

interface IProps extends Omit<IVisit, "id"> {
    className?: string;
}

const Visitors: FC<IProps> = ({
    className,
    title,
    description,
    chartData,
    amount,
}) => {
    return (
        <div
            className={clsx(
                "visitors bg-white border border-ghost grid grid-rows-1 h-[280px] lg:h-auto",
                className
            )}
        >
            <div className="text-center p-[1.563rem] pt-[3.313rem] sm:px-3.8 row-start-1 col-start-1">
                <h1 className="text-5xl font-normal font-lato mb-3">
                    {new Intl.NumberFormat().format(amount)}
                </h1>
                <p className="uppercase font-bold tracking-wider text-heading mb-3.8">
                    {title}
                </p>
                <p className="text-xs">{description}</p>
            </div>
            <div className="w-full row-start-1 col-start-1 self-end h-24">
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
                        width: "1px",
                        colors: ["#0083CD"],
                    }}
                    area={{ opacity: 0.2 }}
                    grid={{ show: false }}
                    label={{ show: false }}
                />
            </div>
        </div>
    );
};

export default Visitors;
