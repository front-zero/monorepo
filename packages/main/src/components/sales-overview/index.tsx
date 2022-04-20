import { useState, MouseEvent, useEffect, FC } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    ChartJSBarChart,
    Nav,
    NavLink,
} from "@ht/components";
import { useWindowSize } from "@ht/shared/hooks";

type ChartTime = "day" | "week" | "month";

interface IProps {
    title: string;
    daydata: number[];
    weekdata: number[];
    monthdata: number[];
}

const SalesOverview: FC<IProps> = ({ title, daydata, weekdata, monthdata }) => {
    const [data, setData] = useState(daydata);
    const [tiksStep, setTickStep] = useState(2.5);
    const { width } = useWindowSize();

    useEffect(() => {
        if (!width) return;
        if (width < 767) {
            setTickStep(5);
        }
    }, [width]);

    const clickHandler = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const td: ChartTime = target.innerText.toLowerCase() as ChartTime;

        if (td === "day") {
            setData(daydata);
        }
        if (td === "week") {
            setData(weekdata);
        }
        if (td === "month") {
            setData(monthdata);
        }
    };
    return (
        <Card className="sales-overview">
            <CardHeader className="sm:flex sm:items-center sm:justify-between m-1">
                <CardTitle className="mb-[10px] sm:mb-0">{title}</CardTitle>
                <Nav>
                    <NavLink onClick={clickHandler}>Day</NavLink>
                    <NavLink onClick={clickHandler}>Week</NavLink>
                    <NavLink onClick={clickHandler}>Month</NavLink>
                </Nav>
            </CardHeader>
            <CardBody className="pt-0">
                <div className="h-[200px] sm:h-[300px]">
                    <ChartJSBarChart
                        data={{
                            labels: [
                                "2",
                                "4",
                                "6",
                                "8",
                                "10",
                                "12",
                                "14",
                                "16",
                            ],
                            datasets: [
                                {
                                    data: data,
                                    backgroundColor: "#4E6577",
                                    barPercentage: 0.7,
                                },
                            ],
                        }}
                        options={{
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: false,
                                },
                            },
                            scales: {
                                y: {
                                    display: true,
                                    max: 15,
                                    min: 0,
                                    ticks: {
                                        stepSize: tiksStep,
                                    },
                                },
                            },
                        }}
                    />
                </div>
            </CardBody>
        </Card>
    );
};

export default SalesOverview;
