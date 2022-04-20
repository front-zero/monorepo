import ActivitiesCard from "../../../components/activities-card";
import TodaysEarning from "../../../components/todays-earning";
import PeopleListCard from "../../../components/people-list-card";

// Demo Data
import activitiesData from "@ht/shared/data/dashboard-three/activities";
import todaysEarningData from "@ht/shared/data/dashboard-three/todays-earning";
import peopleListData from "@ht/shared/data/dashboard-three/people-may-know";

const Row02 = () => {
    return (
        <div className="grid grid-cols-12 gap-[10px] mt-[10px]">
            <div className="col-span-12 lg:col-span-8 xl:col-span-9 grid grid-cols-12 gap-[10px]">
                <div className="col-span-12 md:col-span-5 lg:col-span-6 xl:col-span-5">
                    <ActivitiesCard
                        className="h-full"
                        title="Recent Activities"
                        lastActivity="1 hour ago"
                        activities={activitiesData}
                    />
                </div>
                <div className="col-span-12 md:col-span-7 lg:col-span-6 xl:col-span-7">
                    <TodaysEarning
                        title={todaysEarningData.title}
                        description={todaysEarningData.description}
                        path={todaysEarningData.path}
                        amount={todaysEarningData.amount}
                        chartData={todaysEarningData.chartData}
                    />
                </div>
            </div>
            <div className="col-span-12 lg:col-span-4 xl:col-span-3">
                <PeopleListCard
                    className="h-full"
                    title={peopleListData.title}
                    people={peopleListData.people}
                />
            </div>
        </div>
    );
};

export default Row02;
