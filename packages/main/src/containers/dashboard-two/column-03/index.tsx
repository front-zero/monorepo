import CustomerOverview from "../../../components/customer-overview";
import SalesOverview from "../../../components/sales-overview";
import ThoughtsShareCard from "../../../components/thoughts-share-card";

// Demo data
import customerOverviewData from "@ht/shared/data/dashboard-two/customer-overview";
import saleOverviewData from "@ht/shared/data/dashboard-two/sales-overview";

const Column03 = () => {
    return (
        <div className="col-span-12 lg:col-span-6 order-3 lg:order-2 grid gap-[10px]">
            <CustomerOverview
                title="Customer Overview"
                daydata={customerOverviewData.daydata}
                weekdata={customerOverviewData.weekdata}
                monthdata={customerOverviewData.monthdata}
            />
            <SalesOverview
                title="Sales Overview"
                daydata={saleOverviewData.daydata}
                weekdata={saleOverviewData.weekdata}
                monthdata={saleOverviewData.monthdata}
            />
            <ThoughtsShareCard title="Share Your Thoughts" />
        </div>
    );
};

export default Column03;
