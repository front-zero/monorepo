import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import PageHeader from "../components/page-header/layout-01";
import Sidebar from "../containers/apps/contact/sidebar";
import Main from "../containers/apps/contact/main";
import Wrapper from "../containers/apps/contact/wrapper";
import { ContactContextProvider } from "../context/contact-context";

// Demo data
import contactsData from "@ht/shared/data/contacts";

const Contact = () => {
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[
                    { text: "home", path: "/" },
                    { text: "pages", path: "#!" },
                ]}
                currentPage="Contact Manager"
                title="Contact Manager"
                variant={2}
            />
            <ContactContextProvider allContacts={contactsData}>
                <Wrapper>
                    <Main />
                    <Sidebar />
                </Wrapper>
            </ContactContextProvider>
        </Layout>
    );
};

export default Contact;
