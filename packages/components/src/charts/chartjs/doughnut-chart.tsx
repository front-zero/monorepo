import { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export interface IProps {
    data: {
        labels?: string[];
        datasets: Array<{
            label?: string;
            data: number[];
            backgroundColor: string | string[];
            borderColor?: string;
            borderWidth?: number;
        }>;
    };
    options: {
        [x: string]: unknown;
    };
    width?: number | string;
    height?: number | string;
}

export const ChartJSDoughnutChart: FC<IProps> = ({
    data,
    options,
    width,
    height,
}) => {
    return (
        <Doughnut
            data={data}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                ...options,
            }}
            width={width}
            height={height}
        />
    );
};

ChartJSDoughnutChart.defaultProps = {
    width: "100%",
    height: "100%",
};

export default ChartJSDoughnutChart;
