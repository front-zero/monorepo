import Layout from "../../layouts/layout-01";
import SEO from "../../components/seo";
import PageHeader from "../../components/page-header/layout-01";
import Row01 from "../../containers/forms/form-layout/row-01";
import Row02 from "../../containers/forms/form-layout/row-02";
import Row03 from "../../containers/forms/form-layout/row-03";
import Row04 from "../../containers/forms/form-layout/row-04";
import Row05 from "../../containers/forms/form-layout/row-05";
import Row06 from "../../containers/forms/form-layout/row-06";
import Row07 from "../../containers/forms/form-layout/row-07";

const FormLayouts = () => {
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[
                    { text: "home", path: "/" },
                    { text: "Forms", path: "#!" },
                ]}
                currentPage="Form Layouts"
                title="Form Layouts"
            />
            <Row01 />
            <Row02 />
            <Row03 />
            <Row04 />
            <Row05 />
            <Row06 />
            <Row07 />
        </Layout>
    );
};

export default FormLayouts;
