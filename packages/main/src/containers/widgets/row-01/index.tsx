import SalesCard from "../../../components/sales-report-card";
import ImpressionCard from "../../../components/impression-card/layout-01";
import ImpressionCard02 from "../../../components/impression-card/layout-02";
import ImpressionCard03 from "../../../components/impression-card/layout-03";
import InfoCard from "../../../components/info-card";
import MessagesCard from "../../../components/messages-card";

import SvgIcon01 from "@ht/shared/images/icon1.svg";
import SvgIcon02 from "@ht/shared/images/icon2.svg";

import demoImg from "@ht/shared/images/img1.jpg";

const Row01 = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <SalesCard
                title="Sales Report"
                todaySale="1,898"
                weekSale="32,112"
                monthSale="72,067"
                growthRate={50}
            />
            <SalesCard
                title="Sales Report"
                todaySale="1,263"
                weekSale="28,767"
                monthSale="68,324"
                growthRate={75}
            />
            <SalesCard
                title="Sales Report"
                todaySale="1,263"
                weekSale="28,767"
                monthSale="68,324"
                growthRate={35}
            />
            <ImpressionCard02
                title="Page Impressions"
                impressionCount="323,360"
                growthRate={2.3}
                chartData={[
                    13, 12, 10, 11, 12, 10, 12, 10, 12, 14, 8, 15, 7, 10,
                ]}
            />
            <ImpressionCard03
                title="Page Impressions"
                impressionCount="323,360"
                growthRate={2.3}
                chartData={[
                    13, 12, 10, 11, 12, 10, 12, 10, 12, 14, 8, 15, 7, 10,
                ]}
            />
            <ImpressionCard
                title="Page Impressions"
                impressionCount="323,360"
                growthRate={2.3}
                chartData={[5, 7, 10, 11, 12, 10, 9, 7, 6, 8, 9, 10, 7, 10]}
            />
            <InfoCard
                title="Document Management"
                description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Even the all-powerful Pointing has no control about the blind texts."
                button={{
                    text: "Getting Started",
                    path: "#!",
                }}
                SVGIcon={SvgIcon01}
            />
            <InfoCard
                title="Time Management"
                description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia. Even the all-powerful Pointing has no control about the blind texts."
                button={{
                    text: "Getting Started",
                    path: "#!",
                }}
                SVGIcon={SvgIcon02}
            />
            <MessagesCard
                title="Recent Messages"
                messages={[
                    {
                        id: 1,
                        sender: {
                            name: "Katherine Lumaad",
                            image: {
                                src: demoImg,
                            },
                        },
                        time: "an hour ago",
                        message:
                            "The European languages are members of the same family. Their separate existence is a myth...",
                    },
                    {
                        id: 2,
                        sender: {
                            name: "Katherine Lumaad",
                            image: {
                                src: demoImg,
                            },
                        },
                        time: "an hour ago",
                        message:
                            "The European languages are members of the same family. Their separate existence is a myth...",
                    },
                    {
                        id: 3,
                        sender: {
                            name: "Katherine Lumaad",
                            image: {
                                src: demoImg,
                            },
                        },
                        time: "an hour ago",
                        message:
                            "The European languages are members of the same family. Their separate existence is a myth...",
                    },
                ]}
            />
        </div>
    );
};

export default Row01;
