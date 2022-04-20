import { FC } from "react";
import { ChartistBarChart, Anchor } from "@ht/components";

interface IProps {
    title: string;
    description: string;
    path: string;
    amount: number;
    chartData: number[][];
}

const TodaysEarning: FC<IProps> = ({
    title,
    description,
    path,
    amount,
    chartData,
}) => {
    return (
        <div className="todays-earning h-full bg-white border border-ghost grid grid-rows-2 lg:h-[441px]">
            <div className="col-[1/1] row-[2/3]">
                <ChartistBarChart
                    data={{
                        series: chartData,
                    }}
                    options={{
                        high: 50,
                        low: 0,
                        axisY: {
                            onlyInteger: true,
                            offset: 0,
                        },
                        axisX: {
                            offset: 0,
                        },
                        fullWidth: true,
                        chartPadding: {
                            bottom: 0,
                            left: 0,
                            right: 0,
                            top: 0,
                        },
                        seriesBarDistance: 17,
                    }}
                    bar={{
                        colors: ["#065381", "#34B2E4"],
                        width: ["17px", "25px", "20px", "17px", "25px"],
                    }}
                    responsiveOptions={[
                        [
                            "screen and (min-width: 576px)",
                            {
                                seriesBarDistance: 25,
                            },
                        ],
                        [
                            "screen and (min-width: 768px)",
                            {
                                seriesBarDistance: 20,
                            },
                        ],
                        [
                            "screen and (min-width: 992px)",
                            {
                                seriesBarDistance: 17,
                            },
                        ],
                        [
                            "screen and (min-width: 1200px)",
                            {
                                seriesBarDistance: 25,
                            },
                        ],
                    ]}
                    grid={{
                        show: false,
                    }}
                    label={{ show: false }}
                />
            </div>
            <div className="col-[1/1] row-[1/1] p-[25px]">
                <h1 className="text-[40px] font-bold mb-[10px] font-lato">
                    &#36;{new Intl.NumberFormat().format(amount)}
                </h1>
                <p className="uppercase font-bold tracking-wider text-heading mb-[10px] text-base">
                    {title}
                </p>
                <p className="mb-3.8">{description}</p>
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

export default TodaysEarning;
