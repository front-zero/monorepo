import Conversion from "../../../components/coversion-card";

// Demo data
import conversionsData from "@ht/shared/data/dashboard-one/conversions";

const Row02 = () => {
    return (
        <div className="grid grid-cols-1 bg-white border border-ghost mt-5 lg:grid-cols-4">
            {conversionsData.map((conversion) => (
                <Conversion
                    key={conversion.id}
                    className="odd:bg-gray-400 even:bg-gray-200 lg:border-l border-t lg:border-t-0 first:border-l-0 first:border-t-0"
                    icon={conversion.icon}
                    title={conversion.title}
                    number={conversion.number}
                    titleClass={conversion.titleClass}
                />
            ))}
        </div>
    );
};

export default Row02;
