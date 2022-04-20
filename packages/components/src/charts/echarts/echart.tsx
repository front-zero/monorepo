import ReactEcharts from "echarts-for-react";

interface IProps {
    option: {
        [x: string]: unknown;
    };
}

const EChart = ({ option }: IProps) => {
    return <ReactEcharts option={option} />;
};

export default EChart;
