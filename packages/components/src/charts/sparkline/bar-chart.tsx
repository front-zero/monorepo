import { FC, SVGAttributes, ReactSVGElement, MouseEvent } from "react";
import { Sparklines, SparklinesBars } from "react-sparklines";

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

interface SparklinesBarsProps {
    points?: Point[];
    height?: number;
    style?: SVGAttributes<ReactSVGElement>["style"];
    barWidth?: number;
    margin?: number;
    onMouseMove?: (p: Point, event: MouseEvent<ReactSVGElement>) => void;
}

interface ISparklineProps extends SparklinesProps, SparklinesBarsProps {
    barStyle?: SVGAttributes<ReactSVGElement>["style"];
    barHeight?: number;
}

const SparkBarChart: FC<ISparklineProps> = ({
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
    points,
    barStyle,
    barHeight,
    barWidth,
    onMouseMove,
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
            <SparklinesBars
                points={points}
                height={barHeight}
                style={barStyle}
                barWidth={barWidth}
                margin={margin}
                onMouseMove={onMouseMove}
            />
        </Sparklines>
    );
};

export default SparkBarChart;
