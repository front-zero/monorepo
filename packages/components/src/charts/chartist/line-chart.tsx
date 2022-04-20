import { FC } from "react";
import ChartistGraph from "react-chartist";
import { IChartistDraw, IChartistLineProps } from "@ht/shared/types";

const ChartistLineChart: FC<IChartistLineProps> = ({
    line,
    point,
    area,
    grid,
    label,
    data,
    options,
}) => {
    const onDrawHandler = (e: IChartistDraw) => {
        const {
            type,
            seriesIndex,
            element: { _node: elem },
        } = e;
        const lineColor = line?.colors?.[seriesIndex];

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

        if (type === "line") {
            elem.setAttribute(
                "style",
                `stroke-width: ${line?.width || "1px"}; stroke: ${
                    lineColor || "#1b84e7"
                }`
            );
        }

        if (type === "area") {
            const areaColor = area?.colors?.[seriesIndex];
            const areayOpacity = Array.isArray(area?.opacity)
                ? area?.opacity[seriesIndex]
                : area?.opacity;
            elem.setAttribute(
                "style",
                `fill: ${areaColor || lineColor || "#1b84e7"}; fill-opacity: ${
                    areayOpacity || "0.1"
                }`
            );
        }

        if (type === "point") {
            const pointColor = point?.colors?.[seriesIndex];
            elem.setAttribute(
                "style",
                `stroke-width: ${point?.size || "8px"}; stroke: ${
                    pointColor || lineColor || "#1b84e7"
                }`
            );
        }
    };

    return (
        <ChartistGraph
            listener={{
                draw: (e: IChartistDraw) => onDrawHandler(e),
            }}
            data={data}
            options={options}
            type="Line"
        />
    );
};

export default ChartistLineChart;
