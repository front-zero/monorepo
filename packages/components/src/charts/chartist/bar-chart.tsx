import { FC } from "react";
import ChartistGraph from "react-chartist";
import { IChartistDraw, IChartistBarProps } from "@ht/shared/types";

interface IBreakPoint {
    xs: MediaQueryList;
    sm: MediaQueryList;
    md: MediaQueryList;
    lg: MediaQueryList;
    xl: MediaQueryList;
}

const BarChart: FC<IChartistBarProps> = ({
    bar,
    grid,
    label,
    data,
    options,
    responsiveOptions,
}) => {
    const onDrawHandler = (e: IChartistDraw) => {
        const {
            type,
            seriesIndex,
            element: { _node: elem },
        } = e;

        const breakpoints: IBreakPoint = {
            xs: window.matchMedia("(min-width: 320px)"),
            sm: window.matchMedia("(min-width: 576px)"),
            md: window.matchMedia("(min-width: 768px)"),
            lg: window.matchMedia("(min-width: 992px)"),
            xl: window.matchMedia("(min-width: 1200px)"),
        };

        if (type === "bar") {
            const barColor = bar?.colors?.[seriesIndex] || "#1b84e7";
            const barWidth = bar?.width || "10px";

            if (typeof barWidth === "string") {
                elem.setAttribute(
                    "style",
                    `stroke-width: ${barWidth}; stroke: ${barColor}`
                );
            }

            if (Array.isArray(barWidth)) {
                elem.setAttribute(
                    "style",
                    `stroke-width: ${barWidth[0]}; stroke: ${barColor}`
                );
                Object.keys(breakpoints).forEach((brkPoint, i) => {
                    if (i !== 0) {
                        if (
                            breakpoints[brkPoint as keyof IBreakPoint]
                                .matches &&
                            !!barWidth[i]
                        ) {
                            elem.setAttribute(
                                "style",
                                `stroke-width: ${barWidth[i]}; stroke: ${barColor}`
                            );
                        }
                    }
                });
            }
        }
        if (type === "grid") {
            if (grid?.show === false) {
                elem.setAttribute("style", `display: none;`);
            }
        }
        if (type === "label") {
            if (label?.show === false) {
                elem.setAttribute("style", `display: none;`);
            }
        }
    };
    return (
        <ChartistGraph
            listener={{
                draw: (e: IChartistDraw) => onDrawHandler(e),
            }}
            data={data}
            options={options}
            responsiveOptions={responsiveOptions}
            type="Bar"
        />
    );
};

export default BarChart;
