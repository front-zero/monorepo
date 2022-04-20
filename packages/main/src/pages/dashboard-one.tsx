import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import PageHeader from "../components/page-header/layout-01";
import Row01 from "../containers/dashboard-one/row-01";
import Row02 from "../containers/dashboard-one/row-02";
import Row03 from "../containers/dashboard-one/row-03";
import Row04 from "../containers/dashboard-one/row-04";

const DashboardOne = () => {
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[{ text: "home", path: "/" }]}
                currentPage="Dashboard 01"
                title="Dashboard 01"
            />
            <Row01 />
            <Row02 />
            <Row03 />
            <Row04 />
        </Layout>
    );
};

export default DashboardOne;
