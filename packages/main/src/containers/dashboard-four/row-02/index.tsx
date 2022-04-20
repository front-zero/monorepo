import { Card } from "@ht/components";
import Visitors from "../../../components/visitors-card/layout-02";
import VisitorsLocation from "../../../components/visitors-location";

// Demo data
import visitors from "@ht/shared/data/dashboard-four/visitors";

const Row02 = () => {
    return (
        <Card className="mt-[30px] grid grid-cols-12">
            <div className="col-span-12 lg:col-span-4 border-b border-ghost lg:border-b-0 lg:border-r">
                <Visitors data={visitors} />
            </div>
            <div className="col-span-12 lg:col-span-8">
                <VisitorsLocation title="Visitor's Locations" />
            </div>
        </Card>
    );
};

export default Row02;
