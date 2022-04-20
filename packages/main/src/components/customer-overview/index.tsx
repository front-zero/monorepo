import { useState, MouseEvent, useEffect, FC } from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    ChartJSLineChart,
    Nav,
    NavLink,
} from "@ht/components";
import { useWindowSize } from "@ht/shared/hooks";

type ChartTime = "day" | "week" | "month";

interface IProps {
    title: string;
    daydata: number[][];
    weekdata: number[][];
    monthdata: number[][];
}

const CustomerOverview: FC<IProps> = ({
    title,
    daydata,
    weekdata,
    monthdata,
}) => {
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
        <Card className="card-customer-overview">
            <CardHeader className="sm:flex sm:items-center sm:justify-between m-1">
                <CardTitle className="mb-[10px] sm:mb-0">{title}</CardTitle>
                <Nav>
                    <NavLink onClick={clickHandler}>Day</NavLink>
                    <NavLink onClick={clickHandler}>Week</NavLink>
                    <NavLink onClick={clickHandler}>Month</NavLink>
                </Nav>
            </CardHeader>
            <CardBody className="px-3 pb-3 pt-0">
                <div className="h-[200px] sm:h-[300px]">
                    <ChartJSLineChart
                        data={{
                            labels: ["1", "2", "3", "4", "5", "6"],
                            datasets: [
                                {
                                    label: "Returning Customer",
                                    data: data[0],
                                    backgroundColor: "#4E6577",
                                    fill: true,
                                    tension: 0,
                                    pointRadius: 0,
                                },
                                {
                                    label: "New Customer",
                                    data: data[1],
                                    backgroundColor: "#1B84E7",
                                    fill: true,
                                    tension: 0,
                                    pointRadius: 0,
                                },
                            ],
                        }}
                        options={{
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: true,
                                    align: "center",
                                    labels: {
                                        boxWidth: 10,
                                        boxHeight: 10,
                                        font: {
                                            size: 12,
                                        },
                                    },
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

export default CustomerOverview;
