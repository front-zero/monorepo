import SalesProgressCard from "../../../components/sales-progress-card";
import MostVisitedCard from "../../../components/most-visited-card";
import ContactFormCard from "../../../components/contact-form-card";

// Demo data
import saleProgressdata from "@ht/shared/data/dashboard-two/sale-progress";
import mostVisitedData from "@ht/shared/data/dashboard-two/most-visited";

const Column02 = () => {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-3 order-2 lg:order-3 grid gap-[10px]">
            <SalesProgressCard title="Sale Progress" sales={saleProgressdata} />
            <MostVisitedCard title="Most Visited" data={mostVisitedData} />
            <ContactFormCard title="Quick Contact Form" />
        </div>
    );
};

export default Column02;
