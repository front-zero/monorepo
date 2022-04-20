/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
    IOperatorData,
    IOperatorPercentage,
    TChartTime,
    IFile,
} from "../types";
import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isToday from "dayjs/plugin/isToday";
import isYesterday from "dayjs/plugin/isYesterday";
dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(isBetween);

export const getSiblings = (elem: HTMLElement): HTMLElement[] => {
    const siblings = [];
    let sibling = elem?.parentNode?.firstChild as HTMLElement;
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling as HTMLElement;
    }
    return siblings;
};

export const flatDeep = (arr: any[], d = 1): any[] => {
    return d > 0
        ? arr.reduce((acc, val) => {
              return acc.concat(
                  Array.isArray(val) ? flatDeep(val, d - 1) : val
              ) as any[];
          }, [])
        : arr.slice();
};

export const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
};

export const formatNumber = (x: number): string => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const hasKey = (obj: any, key: string): boolean => {
    return !!Object.prototype.hasOwnProperty.call(obj, key);
};

export const omit = (key: string, obj: { [key: string]: unknown }) => {
    const { [key]: _omitted, ...rest } = obj;
    return rest;
};

export const getPercentage = (
    data: IOperatorData,
    totalVisitor: number
): IOperatorPercentage => {
    let percentageData = {};
    Object.entries(data).forEach(([key, val]) => {
        const value = Math.round((val / totalVisitor) * 100);

        percentageData = {
            ...percentageData,
            [key]: {
                value,
                status:
                    value < 30
                        ? "danger"
                        : value >= 30 && value < 50
                        ? "warning"
                        : "success",
            },
        };
    });
    return percentageData;
};

export const getVisitorByOperator = (data: IOperatorData[]) => {
    let visitorByOperator: { [x: string]: number } = {};

    data.forEach((dayData) => {
        Object.entries(dayData).forEach(([key, val]) => {
            if (typeof val !== "number") return;
            if (hasKey(visitorByOperator, key)) {
                visitorByOperator = {
                    ...visitorByOperator,
                    [key]: visitorByOperator[key] + val,
                };
            } else {
                visitorByOperator = {
                    ...visitorByOperator,
                    [key]: val,
                };
            }
        });
    });
    return visitorByOperator;
};

interface IDate {
    date?: string | Dayjs;
}

export const filterDataByTime = <T extends IDate>(
    time: TChartTime,
    data: T[]
): T[] => {
    let filteredData: T[] = [];

    if (time === "day") {
        filteredData = data.filter((purchase) =>
            dayjs().isSame(purchase.date, "day")
        );
    } else {
        filteredData = data.filter((purchase) =>
            dayjs(purchase.date).isBetween(
                dayjs().startOf(time),
                dayjs().endOf(time)
            )
        );
    }
    return filteredData;
};

export const mergeTailwindClassesAlt = (...classStrings: string[]) => {
    const classHash: { [x: string]: unknown } = {};
    classStrings.map((str) =>
        str.split(/\s+/g).map((token: string) => {
            const t = token.split("-").slice(0, -1).join("-");
            return (classHash[t] = token);
        })
    );
    return Object.values(classHash).sort().join(" ");
};

export const getPercentageValue = (
    value: number,
    totalData: number
): number => {
    return (value / totalData) * 100;
};

export const containsObject = (
    obj: { [x: string]: unknown },
    list: Array<{ slug: string }>
) => {
    let i;
    for (i = 0; i < list.length; i++) {
        if (list[i].slug === obj.slug) {
            return i;
        }
    }
    return -1;
};

export const getUniqueArrayWithCount = (allItem: string[]) => {
    const items: Array<{
        title: string;
        slug: string;
        count: number;
    }> = [];
    allItem.forEach((item) => {
        const obj = {
            title: item,
            slug: slugify(item),
            count: 1,
        };
        const objIndex = containsObject(obj, items);
        if (objIndex !== -1) {
            const prevCount = items[objIndex].count;
            items[objIndex] = {
                title: item,
                slug: slugify(item),
                count: prevCount + 1,
            };
        } else {
            items.push(obj);
        }
    });
    return items;
};

export const filesFormat = (filesData: IFile[]) => {
    const files: { [x: string]: IFile[] } = {};
    filesData.forEach((file) => {
        const key = dayjs(file.createdAt).isToday()
            ? "today"
            : dayjs(file.createdAt).isYesterday()
            ? "yesterday"
            : dayjs(file.createdAt).format("MMMM DD, YYYY");

        if (files[key]) {
            files[key] = [...files[key], file];
        } else {
            files[key] = [file];
        }
    });
    return files;
};
