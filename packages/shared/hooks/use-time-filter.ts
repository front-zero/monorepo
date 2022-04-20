import { useState, useCallback, useEffect, MouseEvent } from "react";
import { TChartTime } from "../types";

const useTimeFilter = (getData: (time: TChartTime) => void) => {
    const [activeButton, setActiveButton] = useState("day");
    const filterHandler = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const td: TChartTime = target.getAttribute("title") as TChartTime;
        setActiveButton(td);
        getData(td);
    }, []);
    useEffect(() => {
        getData("day");
    }, [getData]);

    return { filterHandler, activeButton };
};

export default useTimeFilter;
