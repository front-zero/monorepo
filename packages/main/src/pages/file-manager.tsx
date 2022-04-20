import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import PageHeader from "../components/page-header/layout-01";
import Sidebar from "../containers/apps/file-manager/sidebar";
import Main from "../containers/apps/file-manager/main";
import Wrapper from "../containers/apps/file-manager/wrapper";
import { FileContextProvider } from "../context/file-context";

// demo data
import filesData from "@ht/shared/data/files";

const FileManager = () => {
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[
                    { text: "home", path: "/" },
                    { text: "pages", path: "#!" },
                ]}
                currentPage="File Manager"
                title="File Manager"
                variant={2}
            />
            <FileContextProvider allFiles={filesData}>
                <Wrapper>
                    <Main />
                    <Sidebar />
                </Wrapper>
            </FileContextProvider>
        </Layout>
    );
};

export default FileManager;
