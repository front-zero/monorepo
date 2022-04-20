import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import PageHeader from "../components/page-header/layout-01";
import Column01 from "../containers/dashboard-two/column-01";
import Column02 from "../containers/dashboard-two/column-02";
import Column03 from "../containers/dashboard-two/column-03";

const DashboardTwo = () => {
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[{ text: "home", path: "/" }]}
                currentPage="Dashboard 02"
                title="Dashboard 02"
            />
            <div className="grid grid-cols-12 gap-[10px]">
                <Column01 />
                <Column02 />
                <Column03 />
            </div>
        </Layout>
    );
};

export default DashboardTwo;
