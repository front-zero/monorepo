import { Outlet } from "react-router-dom";
import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import Wrapper from "../containers/apps/messages/wrapper";
import Sidebar from "../containers/apps/messages/sidebar";
// import Main from "../containers/apps/messages/main";
import { ChatContextProvider } from "../context/chat-context";

const Messages = () => {
    return (
        <Layout hideFooter containerClass="maxSm:p-0">
            <SEO />
            <ChatContextProvider>
                <Wrapper>
                    <Sidebar />
                    <Outlet />
                </Wrapper>
            </ChatContextProvider>
        </Layout>
    );
};

export default Messages;
