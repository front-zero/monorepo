import { Card, CardTitle } from "@ht/components";
import BorderedLabelRightAlignForm from "../../../../components/forms/form-layouts/bordered-label-right-align-form";

const Row01 = () => {
    return (
        <Card className="p-5 sm:p-10 mb-5">
            <CardTitle>Bordered Right Label Alignment</CardTitle>
            <p className="mb-5 sm:mb-10">
                A basic form where labels are aligned in right with bordered
                wrapper.
            </p>
            <BorderedLabelRightAlignForm />
        </Card>
    );
};

export default Row01;
