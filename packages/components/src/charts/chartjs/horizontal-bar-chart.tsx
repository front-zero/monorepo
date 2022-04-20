import { FC } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export interface IProps {
    data: {
        labels: string[];
        datasets: Array<{
            label?: string;
            data: number[];
            backgroundColor: string | string[];
            borderColor?: string | string[];
            borderWidth?: number;
        }>;
    };
    options: {
        [x: string]: unknown;
    };
    width?: number | string;
    height?: number | string;
}

export const ChartJSHZBarChart: FC<IProps> = ({
    data,
    options,
    width,
    height,
}) => {
    return (
        <Bar
            data={data}
            options={{
                indexAxis: "y" as const,
                responsive: true,
                maintainAspectRatio: false,
                ...options,
            }}
            width={width}
            height={height}
        />
    );
};

ChartJSHZBarChart.defaultProps = {
    width: "100%",
    height: "100%",
};

export default ChartJSHZBarChart;
