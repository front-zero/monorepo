import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import PageHeader from "../components/page-header/layout-01";
import Row01 from "../containers/dashboard-three/row-01";
import Row02 from "../containers/dashboard-three/row-02";
import Row03 from "../containers/dashboard-three/row-03";

const DashboardThree = () => {
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[{ text: "home", path: "/" }]}
                currentPage="Dashboard 03"
                title="Welcome back, Katherine"
            />
            <Row01 />
            <Row02 />
            <Row03 />
        </Layout>
    );
};

export default DashboardThree;
