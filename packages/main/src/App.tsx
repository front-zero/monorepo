import { FC, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Preloader from "./components/preloader";

const DashboardOne = lazy(() => import("./pages/dashboard-one"));
const DashboardTwo = lazy(() => import("./pages/dashboard-two"));
const DashboardThree = lazy(() => import("./pages/dashboard-three"));
const DashboardFour = lazy(() => import("./pages/dashboard-four"));
const DashboardFive = lazy(() => import("./pages/dashboard-five"));
const Profile = lazy(() => import("./pages/profile"));
const Invoice = lazy(() => import("./pages/invoice"));
const Contact = lazy(() => import("./pages/contact"));
const FileManager = lazy(() => import("./pages/file-manager"));
const Calendar = lazy(() => import("./pages/calendar"));
const Timeline = lazy(() => import("./pages/timeline"));
const Pricing01 = lazy(() => import("./pages/pricing-01"));
const Pricing02 = lazy(() => import("./pages/pricing-02"));
const Pricing03 = lazy(() => import("./pages/pricing-03"));
const Signin = lazy(() => import("./pages/signin"));
const Signin02 = lazy(() => import("./pages/signin-02"));
const Signup = lazy(() => import("./pages/signup"));
const Signup02 = lazy(() => import("./pages/signup-02"));
const Error500 = lazy(() => import("./pages/error-500"));
const Error503 = lazy(() => import("./pages/error-503"));
const Error505 = lazy(() => import("./pages/error-505"));
const ErrorNotFound = lazy(() => import("./pages/error-404"));
const Messages = lazy(() => import("./pages/messages"));
const MessageContent = lazy(() => import("./containers/apps/messages/main"));
const Widgets = lazy(() => import("./pages/widgets"));
const FormLayouts = lazy(() => import("./pages/forms/form-layouts"));
const FormValidation = lazy(() => import("./pages/forms/form-validation"));

const App: FC = () => {
    return (
        <Router>
            <Suspense fallback={<Preloader />}>
                <Routes>
                    {/* Classic Routes */}

                    {/* Dashboard Routes */}
                    <Route path="/" element={<DashboardOne />} />
                    <Route path="/dashboard-two" element={<DashboardTwo />} />
                    <Route path="/dashboard-two" element={<DashboardTwo />} />
                    <Route
                        path="/dashboard-three"
                        element={<DashboardThree />}
                    />
                    <Route path="/dashboard-four" element={<DashboardFour />} />
                    <Route path="/dashboard-five" element={<DashboardFive />} />

                    {/* Pages */}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/invoice" element={<Invoice />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/pricing-01" element={<Pricing01 />} />
                    <Route path="/pricing-02" element={<Pricing02 />} />
                    <Route path="/pricing-03" element={<Pricing03 />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signin-02" element={<Signin02 />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signup-02" element={<Signup02 />} />
                    <Route path="/widgets" element={<Widgets />} />

                    {/* Form Pages */}
                    <Route path="/form-layouts" element={<FormLayouts />} />
                    <Route
                        path="/form-validation"
                        element={<FormValidation />}
                    />

                    {/* Apps */}
                    <Route path="/apps/contact" element={<Contact />} />
                    <Route path="/apps/contact" element={<Contact />}>
                        <Route path=":filterKey" element={<Contact />} />
                    </Route>
                    <Route
                        path="/apps/file-manager"
                        element={<FileManager />}
                    />
                    <Route path="/apps/calendar" element={<Calendar />} />
                    <Route path="/apps/messages" element={<Messages />}>
                        <Route path=":chatId" element={<MessageContent />} />
                    </Route>

                    {/* Error Pages */}

                    <Route path="/error-500" element={<Error500 />} />
                    <Route path="/error-503" element={<Error503 />} />
                    <Route path="/error-505" element={<Error505 />} />

                    {/* 404 Page Route */}
                    <Route path="*" element={<ErrorNotFound />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
