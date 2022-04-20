import { IReport, IRevenue } from "../../types";

const OverallReports: {
    section_title: {
        title: string;
        description: string;
    };
    paths: Array<{
        id: string | number;
        path: string;
        content: string;
        icon: string;
    }>;
    reports: IReport[];
    revenue: IRevenue;
} = {
    section_title: {
        title: "Overall Report Summary",
        description: "January 01, 2018 - January 31, 2018",
    },
    paths: [
        {
            id: 1,
            path: "/profile",
            content: "Activity Logs",
            icon: "icon ion-ios-clock-outline",
        },
        {
            id: 2,
            path: "/profile",
            content: "Edit Settings",
            icon: "icon ion-ios-gear-outline",
        },
    ],
    reports: [
        {
            id: 1,
            total: 420,
            title: "Total Employee",
            type: "employee",
            percentages: [
                { label: "female", value: 66, color: "primary" },
                { label: "male", value: 34, color: "danger" },
            ],
        },
        {
            id: 2,
            total: 55,
            title: "Total Products",
            type: "product",
            percentages: [
                {
                    label: "Digital products",
                    value: 85,
                    color: "success",
                },
                {
                    label: "Non-Digital products",
                    value: 15,
                    color: "warning",
                },
            ],
        },
        {
            id: 3,
            total: 30,
            title: "Total Franchise",
            type: "franchise",
            percentages: [
                { label: "local", value: 75, color: "indigo" },
                {
                    label: "international",
                    value: 25,
                    color: "pink",
                },
            ],
        },
    ],
    revenue: {
        title: "Monthly Revenue",
        desc: "Calculated every 15th of the month",
        income: {
            amount: "$32,500",
            growth: "1.4%",
            status: "up",
        },
        lastMonthIncome: "$79,554",
        chartData: [
            5, 4, 7, 10, 11, 4, 12, 5, 10, 6, 9, 7, 7, 8, 6, 9, 8, 10, 9, 11,
            10, 12, 7, 13, 10,
        ],
    },
};

export default OverallReports;
