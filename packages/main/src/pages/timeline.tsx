import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import PageHeader from "../components/page-header/layout-01";
import Wrapper from "../containers/timeline/wrapper";
import Main from "../containers/timeline/main";
import Sidebar from "../containers/timeline/sidebar";

const Timeline = () => {
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[
                    { text: "home", path: "/" },
                    { text: "pages", path: "#!" },
                ]}
                currentPage="Timeline"
                title="Timeline"
                variant={3}
            />
            <Wrapper>
                <Main />
                <Sidebar />
            </Wrapper>
        </Layout>
    );
};

export default Timeline;
