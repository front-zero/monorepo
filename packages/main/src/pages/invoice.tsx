import { Card, CardBody, Button } from "@ht/components";
import Layout from "../layouts/layout-01";
import SEO from "../components/seo";
import PageHeader from "../components/page-header/layout-01";
import InvoiceHeader from "../containers/invoice/invoice-header";
import BilledInformation from "../containers/invoice/billed-information";
import InvoiceTable from "../containers/invoice/invoice-table";

const Invoice = () => {
    return (
        <Layout>
            <SEO />
            <PageHeader
                prev={[
                    { text: "home", path: "/" },
                    { text: "pages", path: "#!" },
                ]}
                currentPage="Invoice Page"
                title="Invoice Page"
            />
            <Card className="card-invoice">
                <CardBody className="p-[30px] md:p-[60px]">
                    <InvoiceHeader />
                    <BilledInformation />
                    <InvoiceTable />
                    <hr className="mb-[60px]" />

                    <Button shape="square" fullwidth>
                        Pay Now
                    </Button>
                </CardBody>
            </Card>
        </Layout>
    );
};

export default Invoice;
