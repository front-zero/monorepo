import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import PageHeader from "../components/page-header/layout-01";
import Row01 from "../containers/widgets/row-01";
import CardColumns01 from "../containers/widgets/card-columns-01";
import CardColumns02 from "../containers/widgets/card-columns-02";

const Widgets = () => {
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[{ text: "home", path: "/" }]}
                currentPage="Widgets"
                title="Widgets"
            />
            <Row01 />
            <CardColumns01 />
            <CardColumns02 />
        </Layout>
    );
};

export default Widgets;
