import { Dayjs } from "dayjs";

export type TID = string | number;

export interface IChartistDraw {
    element: {
        _node: HTMLElement;
    };
    group: {
        _node: HTMLElement;
    };
    index: number;
    seriesIndex: number;
    type: "line" | "area" | "point" | "bar" | "label" | "slice" | "grid";
}

interface IChartistData {
    labels?: string[] | number[];
    series: number[][];
}
interface IChartistOptions {
    high?: number;
    low?: number;
    axisY?: {
        onlyInteger?: boolean;
        offset?: number | string;
    };
    axisX?: {
        onlyInteger?: boolean;
        offset?: number | string;
    };
    fullWidth?: boolean;
    showArea?: boolean;
    showPoint?: boolean;
    horizontalBars?: boolean;
    chartPadding?: {
        top?: number | string;
        bottom?: number | string;
        left?: number | string;
        right?: number | string;
    };
    seriesBarDistance?: number;
}

type TChartistResponsive = unknown[];

interface IChartist {
    data: IChartistData;
    options: IChartistOptions;
    responsiveOptions?: TChartistResponsive[];
}

export interface IChartistLineProps extends IChartist {
    line?: {
        width?: string;
        colors?: string[];
    };
    point?: {
        size?: string;
        colors?: string[];
    };
    area?: {
        colors?: string[];
        opacity?: number | number[];
    };
    grid?: {
        show?: boolean;
    };
    label?: {
        show?: boolean;
    };
}

export interface IChartistBarProps extends IChartist {
    bar?: {
        width?: string[] | string;
        colors?: string[];
    };
    grid?: {
        show?: boolean;
    };
    label?: {
        show?: boolean;
    };
}

interface IChartistPieData {
    labels?: string[];
    series: number[];
}

interface IChartistPie {
    data: IChartistPieData;
    options: IChartistOptions;
}

export interface IChartistPieProps extends IChartistPie {
    label?: {
        width?: string;
        color?: string;
    };
    slice?: {
        colors?: string[];
        stroke?: string;
    };
    percentageLabel?: boolean;
}

export type TStatus = "success" | "warning" | "danger";

export type TChartTime = "day" | "week" | "month";

export interface IVisitor {
    [x: string]: number | Dayjs;
}

export interface IOperatorData {
    [x: string]: number;
}

export interface IOperatorPercentage {
    [x: string]: { value: number; status: TStatus };
}

export interface IProductPurchase {
    id: string | number;
    date: string;
    title: string;
    path: string;
    availability: number;
    sold: number;
    location: string;
    gain: {
        percentage: string;
        status: "up" | "down";
    };
    updated: string;
}

export interface IVisit {
    id: string | number;
    amount: number;
    title: string;
    description: string;
    chartData: number[][];
}

export interface IConversion {
    id: string | number;
    icon: string;
    title: string;
    number: number;
    titleClass?: string;
}

export interface IPurchase {
    id: string | number;
    product: {
        title: string;
        path: string;
        stock: number;
        image: { src: string; alt?: string };
    };
    sold: number;
    growth: {
        rate: number;
        status: "up" | "down";
    };
}

export interface ITransaction {
    id: string | number;
    user: {
        name: string;
        path: string;
        transId: number;
        image: { src: string; alt?: string };
    };
    type: "success" | "hold" | "failed";
    date: string;
}

export interface IInfo {
    id: string | number;
    SVGIcon: string;
    title: string;
    description: string;
    button: {
        path: string;
        text: string;
    };
}

export interface IMegamenu {
    id: string | number;
    title?: string;
    submenu: IMenu[];
}

export interface IMenu {
    id: string | number;
    label: string;
    url: string;
    icon?: string;
    submenu?: IMenu[];
    megamenu?: IMegamenu[];
}

export interface IReport {
    id: number | string;
    total: number;
    title: string;
    type: "employee" | "product" | "franchise";
    percentages: Array<{
        label: string;
        value: number;
        color?:
            | "primary"
            | "success"
            | "danger"
            | "warning"
            | "info"
            | "indigo"
            | "purple"
            | "orange"
            | "pink";
    }>;
}

export interface IRevenue {
    title: string;
    desc: string;
    income: {
        amount: string;
        growth: string;
        status: "up" | "down";
    };
    lastMonthIncome: string;
    chartData: number[];
}

export interface IPost {
    id: string | number;
    title: string;
    path: string;
    postedAt: string;
    author: {
        name: string;
        path: string;
        location?: string;
    };
    excerpt?: string;
    image?: {
        src: string;
        alt?: string;
    };
}

export interface ISocial {
    label: string;
    link: string;
    icon: string;
}

export interface IContact {
    id: number | string;
    name: string;
    path: string;
    avatar: {
        src: string;
    };
    socials: ISocial[];
    phone: string;
    email: string;
    url: string;
    group: string;
    location: string;
    designation: string;
}

export interface IFile {
    id: string | number;
    title: string;
    path: string;
    size: string;
    createdAt: Dayjs;
    type: "sound" | "document" | "image" | "video";
}

export interface IEvent {
    category: string;
    backgroundColor: string;
    borderColor: string;
    events: Array<{
        id: string;
        start: string;
        end: string;
        title: string;
        description?: string;
    }>;
}

export interface IFriend {
    id: TID;
    name: string;
    avatar: {
        src: string;
    };
    status: "online" | "offline";
}

export interface IChat {
    senderId: TID;
    receiverId: TID;
    message: string;
    sentAt: string;
}
