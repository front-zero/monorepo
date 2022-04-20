import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import PageHeader from "../components/page-header/layout-01";
import CalednarApp from "../containers/apps/calendar";
import { EventContextProvider } from "../context/event-context";

const Calendar = () => {
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[
                    { text: "home", path: "/" },
                    { text: "pages", path: "#!" },
                ]}
                currentPage="Calendar"
                title="Calendar"
                variant={2}
            />
            <EventContextProvider>
                <CalednarApp />
            </EventContextProvider>
        </Layout>
    );
};

export default Calendar;
