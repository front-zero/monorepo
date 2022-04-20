import { useState, useCallback } from "react";
import {
    omit,
    flatDeep,
    getPercentage,
    getVisitorByOperator,
    filterDataByTime,
} from "../methods";
import {
    IOperatorPercentage,
    IOperatorData,
    TChartTime,
    IVisitor,
} from "../types";

const useVisitorsData = (visitors: IVisitor[]) => {
    const [total, setTotal] = useState<number>(0);
    const [percantage, setPercentage] = useState<IOperatorPercentage>();

    const getData = useCallback((time: TChartTime) => {
        const filteredData = filterDataByTime<IVisitor>(time, visitors);

        const mappedData = filteredData.map((visitor) => omit("date", visitor));

        const totalData = flatDeep(
            mappedData.map((visitor) => Object.values(visitor))
        ) as number[];
        const totalValue = totalData.reduce((prev, cur) => prev + cur, 0);

        const visitorByOperator = getVisitorByOperator(
            mappedData as IOperatorData[]
        );
        const percentageData = getPercentage(visitorByOperator, totalValue);
        setPercentage(percentageData);
        setTotal(totalValue);
    }, []);

    return { total, percantage, getData };
};

export default useVisitorsData;
