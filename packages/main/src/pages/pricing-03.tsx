import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import PageHeader from "../components/page-header/layout-01";
import PricingArea from "../containers/pricing/layout-03";

const Pricing03 = () => {
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[
                    { text: "home", path: "/" },
                    { text: "pages", path: "#!" },
                    { text: "pricing", path: "#!" },
                ]}
                currentPage="Pricing 03"
                title="Pricing"
            />
            <PricingArea />
        </Layout>
    );
};

export default Pricing03;
