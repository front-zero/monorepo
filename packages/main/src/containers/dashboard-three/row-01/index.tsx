import StatusCard from "../../../components/status-card";

// Demo Data
import statusData from "@ht/shared/data/dashboard-three/status";

const Row01 = () => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[10px]">
            {statusData?.map((status) => (
                <StatusCard
                    key={status.id}
                    title={status.title}
                    number={status.number}
                    icon={status.icon}
                    iconColor={status.iconColor}
                />
            ))}
        </div>
    );
};

export default Row01;
