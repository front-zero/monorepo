import InfoCard from "../../../components/info-card";
import SalesCard from "../../../components/sales-report-card";
import ImpressionCard from "../../../components/impression-card/layout-01";

// Demo Data
import infosdata from "@ht/shared/data/dashboard-one/infos";
import salesReport from "@ht/shared/data/dashboard-one/sales-report";
import impression from "@ht/shared/data/dashboard-one/impression";

const Row04 = () => (
    <div className="grid md:grid-cols-2 lg:grid-rows-[auto_auto_auto] lg:grid-cols-3 gap-5 mt-5">
        {infosdata?.map((info) => (
            <InfoCard
                key={info.id}
                title={info.title}
                description={info.description}
                button={info.button}
                SVGIcon={info.SVGIcon}
                className="lg:row-[1/3]"
            />
        ))}

        <SalesCard
            title={salesReport.title}
            todaySale={salesReport.todaySale}
            weekSale={salesReport.weekSale}
            monthSale={salesReport.monthSale}
            growthRate={salesReport.growthRate}
            className="lg:row-[1/2]"
        />
        <ImpressionCard
            title={impression.title}
            impressionCount={impression.impressionCount}
            growthRate={impression.growthRate}
            chartData={impression.chartData}
            className="lg:col-[3/-1] lg:row-[2/3]"
        />
    </div>
);

export default Row04;
