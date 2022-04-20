import { TabWrap, TabList, Tab, TabPanel, TabContent } from "@ht/components";
import StatisticsOverview from "../../../components/statistics-overview";
import StatisticsEmployee from "../../../components/statistics-employee";
import StatisticsProducts from "../../../components/statistics-products";
import StatisticsMisc from "../../../components/statistics-misc";

// demo data
import statisticsData from "@ht/shared/data/dashboard-five/statistics";

const Row02 = () => {
    return (
        <TabWrap variation="line" className="mb-[30px]">
            <TabList>
                <Tab>Overview</Tab>
                <Tab>Employee</Tab>
                <Tab>Products</Tab>
                <Tab>Misc</Tab>
            </TabList>
            <TabContent className="p-0 mt-10">
                <TabPanel>
                    <StatisticsOverview
                        amount={statisticsData.overview.amount}
                        title={statisticsData.overview.title}
                        description={statisticsData.overview.description}
                        detailsPath={statisticsData.overview.detailsPath}
                        settingsPath={statisticsData.overview.settingsPath}
                        chartData={statisticsData.overview.chartData}
                    />
                </TabPanel>
                <TabPanel>
                    <StatisticsEmployee
                        amount={statisticsData.employee.amount}
                        title={statisticsData.employee.title}
                        description={statisticsData.overview.description}
                        detailsPath={statisticsData.employee.detailsPath}
                        settingsPath={statisticsData.employee.settingsPath}
                        chartData={statisticsData.employee.chartData}
                    />
                </TabPanel>
                <TabPanel>
                    <StatisticsProducts
                        amount={statisticsData.products.amount}
                        title={statisticsData.products.title}
                        description={statisticsData.overview.description}
                        detailsPath={statisticsData.products.detailsPath}
                        settingsPath={statisticsData.products.settingsPath}
                        chartData={statisticsData.products.chartData}
                    />
                </TabPanel>
                <TabPanel>
                    <StatisticsMisc
                        amount={statisticsData.misc.amount}
                        title={statisticsData.misc.title}
                        description={statisticsData.overview.description}
                        detailsPath={statisticsData.misc.detailsPath}
                        settingsPath={statisticsData.misc.settingsPath}
                        chartData={statisticsData.misc.chartData}
                    />
                </TabPanel>
            </TabContent>
        </TabWrap>
    );
};

export default Row02;
