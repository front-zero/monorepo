import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import Row01 from "../containers/dashboard-four/row-01";
import Row02 from "../containers/dashboard-four/row-02";
import Row03 from "../containers/dashboard-four/row-03";

const DashboardFour = () => {
    return (
        <Layout>
            <SEO />
            <Row01 />
            <Row02 />
            <Row03 />
        </Layout>
    );
};

export default DashboardFour;
