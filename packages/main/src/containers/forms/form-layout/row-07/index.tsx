import { Card, CardTitle } from "@ht/components";
import DropdownForm from "../../../../components/forms/form-layouts/dropdown-form";

const Row05 = () => {
    return (
        <Card className="p-5 sm:p-10 mb-5">
            <CardTitle>Form In Dropdown</CardTitle>
            <p className="mb-5 sm:mb-10">
                A form that is inside the dropdown menu.
            </p>
            <div className="h-[500px]">
                <DropdownForm />
            </div>
        </Card>
    );
};

export default Row05;
