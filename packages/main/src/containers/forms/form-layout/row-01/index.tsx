import { Card, CardTitle } from "@ht/components";
import TopLabelForm from "../../../../components/forms/form-layouts/top-label-form";

const Row01 = () => {
    return (
        <Card className="p-5 sm:p-10 mb-5">
            <CardTitle>Top Label Layout</CardTitle>
            <p className="mb-5 sm:mb-10">
                A form with a label on top of each form control.
            </p>
            <TopLabelForm />
        </Card>
    );
};

export default Row01;
