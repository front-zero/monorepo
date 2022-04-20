import ImpressionCard from "../../../components/impression-card/layout-04";
import ActivitiesCard from "../../../components/activities-card";
import TodoCard from "../../../components/todo-card";

// Demo data
import impressionData from "@ht/shared/data/dashboard-two/impression";
import activitiesData from "@ht/shared/data/dashboard-two/activities";
import todoData from "@ht/shared/data/dashboard-two/todo";

const Column01 = () => {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-3 order-1 grid gap-[10px]">
            <ImpressionCard
                title={impressionData.title}
                impressionCount={impressionData.impressionCount}
                growthRate={impressionData.growthRate}
                chartData={impressionData.chartData}
            />
            <ActivitiesCard
                title="Recent Activities"
                lastActivity="1 hour ago"
                activities={activitiesData}
            />
            <TodoCard title="Todo Item List" data={todoData} />
        </div>
    );
};

export default Column01;
