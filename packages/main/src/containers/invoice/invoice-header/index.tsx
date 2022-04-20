const InvoiceHeader = () => {
    return (
        <div className="invoice-header md:flex md:justify-between md:flex-row-reverse">
            <h1 className="mb-0 uppercase text-ghost font-bold">Invoice</h1>
            <div className="mt-[25px] md:mt-0">
                <h6 className="text-[15px] text-primary">Company, Inc.</h6>
                <p className="leading-relaxed">
                    201 Something St., Something Town, YT 242, Country 6546
                    <br />
                    Tel No: 324 445-4544
                    <br />
                    Email: youremail@companyname.com
                </p>
            </div>
        </div>
    );
};

export default InvoiceHeader;
