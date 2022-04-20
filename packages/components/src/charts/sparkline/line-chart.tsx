import { FC, SVGAttributes, ReactSVGElement } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

interface Point {
    x: number;
    y: number;
}

interface SparklinesProps {
    data?: number[];
    limit?: number;
    width?: number;
    height?: number;
    svgWidth?: SVGAttributes<ReactSVGElement>["width"];
    svgHeight?: SVGAttributes<ReactSVGElement>["height"];
    preserveAspectRatio?: SVGAttributes<ReactSVGElement>["preserveAspectRatio"];
    margin?: number;
    min?: number;
    max?: number;
    style?: SVGAttributes<ReactSVGElement>["style"];
}

interface SparklinesLineProps {
    color?: SVGAttributes<ReactSVGElement>["color"];
    style?: SVGAttributes<ReactSVGElement>["style"];
    onMouseMove?: (
        event: "enter" | "click",
        value: number,
        point: Point
    ) => void;
}
interface SparklinesSpotsProps {
    spotSize?: number;
    spotStyle?: SVGAttributes<ReactSVGElement>["style"];
    spotColors?: { [change: string]: string };
}

interface ISparklineLineProps
    extends SparklinesProps,
        SparklinesLineProps,
        SparklinesSpotsProps {
    color?: SVGAttributes<ReactSVGElement>["color"];
    lineStyle?: SVGAttributes<ReactSVGElement>["style"];
    hasSpot?: boolean;
}

const SparkLineChart: FC<ISparklineLineProps> = ({
    data,
    limit,
    width,
    height,
    svgWidth,
    svgHeight,
    preserveAspectRatio,
    margin,
    min,
    max,
    style,
    color,
    lineStyle,
    onMouseMove,
    hasSpot,
    spotSize,
    spotStyle,
    spotColors,
}) => {
    return (
        <Sparklines
            data={data}
            limit={limit}
            width={width}
            height={height}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
            preserveAspectRatio={preserveAspectRatio}
            margin={margin}
            min={min}
            max={max}
            style={style}
        >
            <SparklinesLine
                color={color}
                style={lineStyle}
                onMouseMove={onMouseMove}
            />
            {hasSpot ? (
                <SparklinesSpots
                    size={spotSize}
                    style={spotStyle}
                    spotColors={spotColors}
                />
            ) : (
                <SparklinesSpots size={0} />
            )}
        </Sparklines>
    );
};

export default SparkLineChart;
