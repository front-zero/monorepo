import clsx from "clsx";
import { Button } from "@ht/components";
import CardTotal from "../../../components/total-card";
import RevenueCard from "../../../components/revenue-card";
import SectionTitle from "../../../components/section-title";

// Demo data
import reportData from "@ht/shared/data/dashboard-five/overall-report";

const Row03 = () => {
    return (
        <>
            <div className="report-summary-header my-[25px] md:flex md:items-center md:justify-between">
                <SectionTitle {...reportData.section_title} />
                <div className="mt-5 md:mt-0 flex flex-wrap gap-1.5">
                    {reportData.paths?.map(({ id, path, icon, content }) => (
                        <Button
                            key={id}
                            path={path}
                            color="secondary"
                            shape="square"
                            className="h-10 sm:px-5"
                        >
                            <i
                                className={clsx(
                                    icon,
                                    "text-[22px] mr-[10px] leading-none"
                                )}
                            />
                            {content}
                        </Button>
                    ))}
                </div>
            </div>

            {/* className="w-full h-full md:w-1/3  -mt-px md:-ml-px lg:mt-0 first:ml-0" */}
            <div className="flex flex-wrap mb-[35px]">
                {reportData.reports.map((report) => (
                    <CardTotal
                        key={report.id}
                        total={report.total}
                        title={report.title}
                        type={report.type}
                        percentages={report.percentages}
                        className="border-b-0 sm:w-1/2 smToMd:third:border-b smToMd:even:border-l-0 md:border-b-0 md:w-1/3 md:border-l-0 md:first:border-l lg:border-b lg:w-auto lg:flex-1"
                    />
                ))}

                {/* <div className="w-full  -mt-px md:-ml-px lg:mt-0 first:mt-0 first:ml-0">
      
                </div> */}
                <RevenueCard
                    title={reportData.revenue.title}
                    desc={reportData.revenue.desc}
                    income={reportData.revenue.income}
                    lastMonthIncome={reportData.revenue.lastMonthIncome}
                    chartData={reportData.revenue.chartData}
                    className="sm:w-1/2 sm:border-l-0 md:border-l md:w-full lg:w-1/3 lg:border-l-0"
                />
            </div>
        </>
    );
};

export default Row03;
