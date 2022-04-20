import { SectionLabel } from "@ht/components";

const BilledInformation = () => {
    return (
        <div className="grid md:grid-cols-2 md:gap-[30px] mt-5">
            <div className="col-md">
                <SectionLabel>Billed To</SectionLabel>
                <div className="billed-to">
                    <h6 className="text-[15px]">Juan Dela Cruz</h6>
                    <p className="leading-relaxed">
                        4033 Patterson Road, Staten Island, NY 10301 <br />
                        Tel No: 324 445-4544
                        <br />
                        Email: youremail@companyname.com
                    </p>
                </div>
            </div>
            <div className="col-md">
                <SectionLabel>Invoice Information</SectionLabel>
                <p className="flex justify-between py-[5px] mb-0 border-b border-dashed border-b-geyser last:border-0">
                    <span className="text-gray-750">Invoice No</span>
                    <span>GHT-673-00</span>
                </p>
                <p className="flex justify-between py-[5px] mb-0 border-b border-dashed border-b-geyser last:border-0">
                    <span className="text-gray-750">Project ID</span>
                    <span>32334300</span>
                </p>
                <p className="flex justify-between py-[5px] mb-0 border-b border-dashed border-b-geyser last:border-0">
                    <span className="text-gray-750">Issue Date:</span>
                    <span>November 21, 2017</span>
                </p>
                <p className="flex justify-between py-[5px] mb-0 border-b border-dashed border-b-geyser last:border-0">
                    <span className="text-gray-750">Due Date:</span>
                    <span>November 30, 2017</span>
                </p>
            </div>
        </div>
    );
};

export default BilledInformation;
