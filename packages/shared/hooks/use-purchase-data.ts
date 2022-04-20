import { useState, useCallback } from "react";
import { TChartTime, IProductPurchase } from "../types";
import { filterDataByTime } from "../methods";

const usePurchaseData = (purchases: IProductPurchase[]) => {
    const [purchaseData, setPurchaseData] = useState<IProductPurchase[]>();

    const getData = useCallback((time: TChartTime) => {
        const filteredData = filterDataByTime<IProductPurchase>(
            time,
            purchases
        );

        setPurchaseData(filteredData);
    }, []);

    return { purchaseData, getData };
};

export default usePurchaseData;
