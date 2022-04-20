import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import PageHeader from "../components/page-header/layout-01";
import PricingArea from "../containers/pricing/layout-01";

const Pricing01 = () => {
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[
                    { text: "home", path: "/" },
                    { text: "pages", path: "#!" },
                    { text: "pricing", path: "#!" },
                ]}
                currentPage="Pricing 01"
                title="Pricing"
            />
            <PricingArea />
        </Layout>
    );
};

export default Pricing01;
