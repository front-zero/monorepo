import { BasicTable, SectionLabel } from "@ht/components";

const InvoiceTable = () => {
    return (
        <BasicTable className="table-invoice mt-10 min-w-[500px]">
            <thead>
                <tr>
                    <th className="w-1/5">Type</th>
                    <th className="w-2/5">Description</th>
                    <th className="text-center">QNTY</th>
                    <th className="text-right">Unit Price</th>
                    <th className="text-right">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Website Design</td>
                    <td className="text-xs">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam...
                    </td>
                    <td className="text-center">2</td>
                    <td className="text-right">$150.00</td>
                    <td className="text-right">$300.00</td>
                </tr>
                <tr>
                    <td>Firefox Plugin</td>
                    <td className="text-xs">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque...
                    </td>
                    <td className="text-center">1</td>
                    <td className="text-right">$1,200.00</td>
                    <td className="text-right">$1,200.00</td>
                </tr>
                <tr>
                    <td>iPhone App</td>
                    <td className="text-xs">
                        Et harum quidem rerum facilis est et expedita distinctio
                    </td>
                    <td className="text-center">2</td>
                    <td className="text-right">$850.00</td>
                    <td className="text-right">$1,700.00</td>
                </tr>
                <tr>
                    <td>Android App</td>
                    <td className="text-xs">
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora incidunt ut
                    </td>
                    <td className="text-center">3</td>
                    <td className="text-right">$850.00</td>
                    <td className="text-right">$2,550.00</td>
                </tr>
                <tr>
                    <td className="valign-middle" colSpan={2} rowSpan={4}>
                        <div className="invoice-notes mr-5">
                            <SectionLabel>Notes</SectionLabel>
                            <p className="text-sm">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae
                                ab illo inventore veritatis et quasi architecto
                                beatae vitae dicta sunt explicabo.
                            </p>
                        </div>
                    </td>
                    <td className="text-right">Sub-Total</td>
                    <td className="text-right" colSpan={2}>
                        $5,750.00
                    </td>
                </tr>
                <tr>
                    <td className="text-right font-medium text-heading">
                        Tax (5%)
                    </td>
                    <td className="text-right" colSpan={2}>
                        $287.50
                    </td>
                </tr>
                <tr>
                    <td className="text-right font-medium text-heading">
                        Discount
                    </td>
                    <td className="text-right" colSpan={2}>
                        -$50.00
                    </td>
                </tr>
                <tr>
                    <td className="text-right uppercase font-medium text-heading">
                        Total Due
                    </td>
                    <td className="text-right" colSpan={2}>
                        <h4 className="text-primary font-bold font-lato">
                            $5,987.50
                        </h4>
                    </td>
                </tr>
            </tbody>
        </BasicTable>
    );
};

export default InvoiceTable;
