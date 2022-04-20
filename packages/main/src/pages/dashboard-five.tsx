import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import Row01 from "../containers/dashboard-five/row-01";
import Row02 from "../containers/dashboard-five/row-02";
import Row03 from "../containers/dashboard-five/row-03";
import Row04 from "../containers/dashboard-five/row-04";

const DashboardFive = () => {
    return (
        <Layout>
            <SEO />
            <Row01 />
            <Row02 />
            <hr />
            <Row03 />
            <hr />
            <Row04 />
        </Layout>
    );
};

export default DashboardFive;
