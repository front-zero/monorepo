import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import PageHeader from "../components/page-header/layout-01";
import MainContent from "../containers/profile/main-content";
import Sidebar from "../containers/profile/sidebar";
import { FileProvider } from "../context/profile-context";

const Profile = () => {
    return (
        <FileProvider>
            <Layout>
                <SEO />
                <PageHeader
                    prev={[
                        { text: "home", path: "/" },
                        { text: "pages", path: "#!" },
                    ]}
                    currentPage="Profile Page"
                    title="My Profile"
                />
                <div className="grid lg:grid-cols-12 gap-5">
                    <div className="lg:col-span-8">
                        <MainContent />
                    </div>
                    <div className="lg:col-span-4">
                        <Sidebar />
                    </div>
                </div>
            </Layout>
        </FileProvider>
    );
};

export default Profile;
