import { FC } from "react";
import { CardTitle, VectorMap } from "@ht/components";
import WorldData from "@ht/shared/data/maps/world-low-res.json";

interface IProps {
    title: string;
}

const VisitorsLocation: FC<IProps> = ({ title }) => {
    return (
        <div className="visitors-location p-[25px]">
            <CardTitle className="mb-[25px]">{title}</CardTitle>
            <VectorMap
                className="h-[250px] sm:h-[350px] md:h-[450px]"
                data={WorldData}
                color="#17A2B8"
                selectedColor="#666666"
                tooltip
                currentLayers={[
                    "us",
                    "br",
                    "au",
                    "ru",
                    "cn",
                    "id",
                    "in",
                    "my",
                    "sa",
                ]}
            />
        </div>
    );
};

export default VisitorsLocation;
