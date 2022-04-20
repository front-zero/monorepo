import Layout from "../../layouts/layout-01";
import SEO from "../../components/seo";
import PageHeader from "../../components/page-header/layout-01";
import Row01 from "../../containers/forms/form-validation/row-01";
import Row02 from "../../containers/forms/form-validation/row-02";
import Row03 from "../../containers/forms/form-validation/row-03";
import Row04 from "../../containers/forms/form-validation/row-04";

const FormValidation = () => {
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[
                    { text: "home", path: "/" },
                    { text: "Forms", path: "#!" },
                ]}
                currentPage="Form Validation"
                title="Form Validation"
            />
            <Row01 />
            <Row02 />
            <Row03 />
            <Row04 />
        </Layout>
    );
};

export default FormValidation;
