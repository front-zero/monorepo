import { FC } from "react";
import ChartistGraph from "react-chartist";
import { IChartistDraw, IChartistPieProps } from "@ht/shared/types";

const PieChart: FC<IChartistPieProps> = ({
    label,
    slice,
    data,
    options,
    percentageLabel,
}) => {
    const onDrawHandler = (e: IChartistDraw) => {
        const {
            type,
            index,
            element: { _node: elem },
        } = e;
        if (type === "label") {
            elem.setAttribute(
                "style",
                `font-size: ${label?.width || "16px"}; fill: ${
                    label?.color || "rgba(255, 255, 255, 0.75)"
                }`
            );
        }
        if (type === "slice") {
            const sliceColor = slice?.colors?.[index];

            elem.setAttribute(
                "style",
                `fill: ${sliceColor || "#1b84e7"}; stroke: ${
                    slice?.stroke || "#fff"
                }`
            );
        }
    };

    data.series.reduce((a, b) => a + b);

    const pieOptions = {
        ...options,
        labelInterpolationFnc: function (value: number) {
            if (data?.labels?.length && data?.labels?.length > 0) {
                return value;
            } else if (percentageLabel) {
                const valueTotal = data.series.reduce((a, b) => a + b);
                return `${Math.round((value / valueTotal) * 100)}%`;
            } else {
                return value;
            }
        },
    };

    return (
        <ChartistGraph
            listener={{
                draw: (e: IChartistDraw) => onDrawHandler(e),
            }}
            data={data}
            options={pieOptions}
            type="Pie"
        />
    );
};

export default PieChart;
